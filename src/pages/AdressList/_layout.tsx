import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { AdressContainer, BottomButtonLayout, Divider } from "../../components";


const data = [
    {
        id: 1,
        adressTitle: "İkamet Adresim",
        adressDetails: "Adres detayı, lor",
        currentAdress: "Üsküdar/İstanbul",
    },
    {
        id: 2,
        adressTitle: "İkamet Adresim",
        adressDetails: "Adres detayı, lor",
        currentAdress: "Üsküdar/İstanbul",
    },
    {
        id: 3,
        adressTitle: "İkamet Adresim",
        adressDetails: "Adres detayı, lor",
        currentAdress: "Üsküdar/İstanbul",
    },
]

export default function AdressList() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContentContainer}>
                    <View style={styles.pagePadding}>
                        {/* Title */}
                        <Text style={styles.titleStyle}>Kayıtlı Adresler</Text>
                        <View style={{ height: 10 }} />
                        {/* Information Container */}
                        <View style={styles.adressListContainer}>
                            {data.map((e) => {
                                return (
                                    e.id == 2
                                        ? <View>
                                            <View style={{ paddingVertical: 16 }}>
                                                <Divider />
                                            </View>
                                            <AdressContainer
                                                key={e.id}
                                                adressTitle={e.adressTitle}
                                                adressDetails={e.adressDetails}
                                                currentAdress={e.currentAdress}
                                            />
                                            <View style={{ paddingVertical: 16 }}>
                                                <Divider />
                                            </View>
                                        </View>
                                        : <AdressContainer
                                            key={e.id}
                                            adressTitle={e.adressTitle}
                                            adressDetails={e.adressDetails}
                                            currentAdress={e.currentAdress}
                                        />
                                )
                            })}
                        </View>
                    </View>
                </ScrollView>
                {/* Button Area */}
                <BottomButtonLayout
                    title="Yeni Kayıt Ekle"
                    onPress={() => { }}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    scrollViewContentContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
    },
    pagePadding: {
        paddingHorizontal: 20,
    },
    innerContainer: {
        flex: 1,
        backgroundColor: '#0000',
        justifyContent: 'space-between',
    },
    buttonStyle: {
        paddingTop: 15,
    },
    titleStyle: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '500',
        color: '#3D2852',
        paddingTop: 30,
    },
    adressListContainer: {
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: '#EEF0F4',
    }
})