import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type PrimaryButtonProps = {
    onPress: () => void;
    title: string;
    disabled?: boolean;
    testID?: string
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, title, testID, disabled = false }) => {
    return (
        <TouchableOpacity onPress={onPress} style={disabled ? styles.disabledContainer : styles.container} testID={testID} disabled={disabled}>
            <Text
                style={[
                    styles.text,
                    disabled
                        ? { color: '#AAB5C1' }
                        : { color: 'white' }]}
            >
                {title}
            </Text>
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
    disabledContainer: {
        backgroundColor: '#EEF0F4',
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
