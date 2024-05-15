import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { PrimaryButton } from "../../components";


export default function AddAdress() {
    return <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}>
        <SafeAreaView style={{ flex: 1, }}>
            <PrimaryButton
                title="Kaydet"
                onPress={() => { }}
                disabled={true}
            />
        </SafeAreaView>
    </ScrollView>
}