import React from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors, Padding } from "../../../constants";

type PrimaryButtonProps = {
    onPress: () => void;
    title: string;
    disabled?: boolean;
    testID?: string
    loading?: boolean;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, title, testID, disabled, loading = false }) => {
    return (
        <TouchableOpacity onPress={disabled ? undefined : onPress} style={[styles.container, disabled && styles.disabledContainer]} testID={"button"} disabled={disabled}>
            <Text
                testID="title"
                style={[
                    styles.text,
                    disabled
                        ? { color: '#AAB5C1' }
                        : { color: Colors.white }]}
            >
                {loading ? <ActivityIndicator testID="loadingIndicator" /> : title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.button,
        paddingVertical: Padding.p18,
        borderRadius: 6,
        alignItems: 'center',
    },
    disabledContainer: {
        backgroundColor: Colors.primaryBorder,
        paddingVertical: Padding.p18,
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
