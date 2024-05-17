import { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../../../constants";

type ComponentTitleProps = {
    title: string;
    padding?: number
    paddingTop?: number;
    paddingBottom?: number;
    paddingRight?: number;
    paddingLeft?: number;
}

const ComponentTitle: React.FC<ComponentTitleProps> = ({
    title,
    padding,
    paddingTop,
    paddingBottom,
    paddingRight,
    paddingLeft,
}) => {
    return <Text style={[
        styles.title,
        {
            padding: padding,
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
            paddingRight: paddingRight,
            paddingLeft: paddingLeft,
        }
    ]}>{title}</Text>
}

export default ComponentTitle;

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '500',
        color: Colors.thirdTitle,
        // paddingTop: 30,
    },
})