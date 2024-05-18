import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native";
import { Colors } from "../../../constants";

interface BaseViewProps {
    backgroundColor?: string,
    flex?: number,
    children: ReactNode,
}

const BaseView: React.FC<BaseViewProps> = ({ flex = 1, backgroundColor = Colors.white, children }) => {
    return <SafeAreaView style={{ flex, backgroundColor }}>
        {children}
    </SafeAreaView>
}

export default BaseView;