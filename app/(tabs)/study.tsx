import React, { useEffect, useState, useRef } from "react";
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, AppState, Animated, Image} from "react-native";
import { images } from "@/constants/images";
import {opacity} from "react-native-reanimated/lib/typescript/Colors";

const ComponentName = () => {
    const [studyTime, setStudyTime] = useState(0);
    const [isStudying, setIsStudying] = useState(false);
    const [appState, setAppState] = useState(AppState.currentState);
    const timerRef = useRef<NodeJS.Timeout | null>(null); // Persist timer reference

    // Detect app state changes
    useEffect(() => {
        const subscription = AppState.addEventListener("change", nextAppState => {
            setAppState(nextAppState);
            if (nextAppState !== "active") {
                setIsStudying(false); // Pause study session if app is inactive
            }
        });

        return () => subscription.remove();
    }, []);

    // Timer logic
    useEffect(() => {
        if (isStudying) {
            timerRef.current = setInterval(() => {
                setStudyTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [isStudying]);

    // Toggles the study session
    const toggleStudySession = () => {
        setIsStudying(prev => !prev);
    };

    // Converts seconds into hours:minutes format
    const convertTime = (time: number) => {
        let hours = Math.floor(time / 60);
        let minutes = time % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={images.workout} resizeMode="cover" style={styles.image}>
                <TouchableOpacity onPress={toggleStudySession} style={styles.button}
                                  className={""}>
                    <Text style={styles.buttonText}>
                        {isStudying ? "Pause Study Session" : "Begin Study Session"}
                    </Text>
                </TouchableOpacity>

                <View style={styles.counterContainer} className="h-[20%]">
                    <Text style={styles.counterLabel}>Time Studied this week:</Text>
                    <Text style={styles.counterValue}>{convertTime(studyTime)}</Text>
                </View>
                <View className={"flex-1 justify-center items-center"}>
                    {isStudying && (
                        studyTime % 2 === 0 ? (
                            <Image source={images.dumbbellr} className={"w-[200] h-[270] mt-[0%]"} />
                        ) : (
                            <Image source={images.dumbbell} className={"w-[200] h-[270] mt-[0%]" }/>
                        )
                    )}
                </View>

            </ImageBackground>
        </View>
    );
};

export default ComponentName;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "start",
    },
    button: {
        backgroundColor: "#FFB6C1",
        paddingVertical: 16,
        width: "90%",
        marginTop: 100,
        borderRadius: 16,
        alignItems: "center",
    },
    buttonText: {
        color: "#8B4513",
        fontSize: 18,
        fontWeight: "bold",
    },
    counterContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFB6C1",
        marginTop: "25%",

        padding: 20,
        borderRadius: 16,
    },
    counterLabel: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    counterValue: {
        fontSize: 48,
        fontWeight: "bold",
    },
});
