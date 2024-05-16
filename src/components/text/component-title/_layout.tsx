import { Component } from "react";
import { StyleSheet, Text } from "react-native";

type ComponentTitleProps = {
    title: string;
}

const ComponentTitle: React.FC<ComponentTitleProps> = ({ title }) => {
    return <Text style={styles.title}>{title}</Text>
}

export default ComponentTitle;

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '500',
        color: '#3D2852',
        paddingTop: 30,
    },
})