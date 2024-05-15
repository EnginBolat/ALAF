import React from "react";
import { StyleSheet, Text, View } from "react-native";

type PrimaryInputProps = {
    label: String;
}


const PrimaryInput: React.FC<PrimaryInputProps> = ({ label }) => {
    return <View>
        <Text>{label}</Text>
    </View>
}

const styles = StyleSheet.create({})


export default PrimaryInput;