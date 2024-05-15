import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type PrimaryButtonProps = {
    onPress: () => void;
    title: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#019693',
        paddingVertical: 18,
        borderRadius: 6,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        textAlign: 'center',
    },
});

export default PrimaryButton;
