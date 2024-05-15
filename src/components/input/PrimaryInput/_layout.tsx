import React, { useRef, useState } from "react";
import { Animated, StyleSheet, Text, TextInput, View } from "react-native";

type PrimaryInputProps = {
    label: string;
}


const PrimaryInput: React.FC<PrimaryInputProps> = ({ label }) => {
    const [text, setText] = useState('');
    const floatingLabelAnimation = useRef(
        new Animated.Value(text ? 1 : 0),
    ).current;

    const handleFocus = () => {
        // Animate the label up and reduce its size when input is focus
        Animated.timing(floatingLabelAnimation, {
            toValue: 1,
            duration: 150,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        // If the input is empty, animate the floating label back to its original position
        if (!text) {
            Animated.timing(floatingLabelAnimation, {
                toValue: 0,
                duration: 150,
                useNativeDriver: false,
            }).start();
        }
    };

    // Define animated styles for the floating label
    const floatingLabelStyle = {
        top: floatingLabelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [10, -5], // top value
        }),
        fontSize: floatingLabelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 12], // font size
        }),
    };

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.label, floatingLabelStyle]}>
                {label}
            </Animated.Text>
            <TextInput
                cursorColor={'#6F6085'}
                selectionHandleColor={''}
                style={styles.inputText}
                value={text}
                onChangeText={val => setText(val)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E6E9EE',
        backgroundColor: '#FCFCFD',
        paddingVertical: 21,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    label: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 18,
        color: '#6F6085',
    },
    inputText: {
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 18
    },
})


export default PrimaryInput;