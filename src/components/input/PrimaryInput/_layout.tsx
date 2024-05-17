import React, { useRef, useState } from "react";
import { Animated, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors, Padding } from "../../../constants";

type PrimaryInputProps = {
    label: string;
    onChangeText: any,
    value: string;
}


const PrimaryInput: React.FC<PrimaryInputProps> = ({ label, onChangeText, value }) => {
    const floatingLabelAnimation = useRef(
        new Animated.Value(value ? 1 : 0),
    ).current;

    const handleFocus = () => {
        Animated.timing(floatingLabelAnimation, {
            toValue: 1,
            duration: 150,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        if (!value) {
            Animated.timing(floatingLabelAnimation, {
                toValue: 0,
                duration: 150,
                useNativeDriver: false,
            }).start();
        }
    };

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
                testID="primary-input"
                cursorColor={Colors.secondaryTitle}
                selectionHandleColor={''}
                style={[styles.inputText, { height: value.length > 0 ? "auto" : 18 }]}
                value={value}
                onChangeText={val => onChangeText(val)}
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
        borderColor: Colors.secondaryBorder,
        backgroundColor: Colors.secondaryBackground,
        paddingVertical: Padding.p21,
        paddingHorizontal: Padding.p16,
        borderRadius: 8,
    },
    label: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 18,
        color: Colors.secondaryTitle
    },
    inputText: {
        fontWeight: '300',
        padding: 0,
        fontSize: 14,
        lineHeight: 18,
        includeFontPadding: false
    },
})


export default PrimaryInput;