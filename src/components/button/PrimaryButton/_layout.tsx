import React from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../../constants";

type PrimaryButtonProps = {
    onPress: () => void;
    title: string;
    disabled?: boolean;
    testID?: string
    loading?: boolean;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, title, testID, disabled = false, loading = false }) => {
    return (
        <TouchableOpacity onPress={onPress} style={disabled ? styles.disabledContainer : styles.container} testID={testID} disabled={disabled}>
            <Text
                style={[
                    styles.text,
                    disabled
                        ? { color: '#AAB5C1' }
                        : { color: Colors.white }]}
            >
                {loading ? <ActivityIndicator /> : title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.button,
        paddingVertical: 18,
        borderRadius: 6,
        alignItems: 'center',
    },
    disabledContainer: {
        backgroundColor: Colors.primaryBorder,
        paddingVertical: 18,
        borderRadius: 6,
        alignItems: 'center',
    },
    text: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        textAlign: 'center',
    },
});

export default PrimaryButton;
