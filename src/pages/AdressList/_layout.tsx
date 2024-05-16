import React, { useEffect } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AdressContainer, BottomButtonLayout, ComponentTitle, Divider, ErrorText, Loading } from "../../components";
import { AppDispatch, RootState, adressList } from "../../redux";
const { height } = Dimensions.get('window');


export default function AdressList({ navigation }) {
    const { addresses, loading, error, } = useSelector((state: RootState) => state.adress);
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => { dispatch(adressList()) }, [])

    if (loading) { return < Loading /> }
    else if (error) { return <ErrorText error={error} /> }

    function handleAddNewRecordButton() { navigation.navigate('AddAdress'); }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.pagePadding}>
                    {/* Title */}
                    <ComponentTitle title="Kayıtlı Adresler" paddingTop={height * 0.04} />
                    <View style={{ height: 10 }} />
                    {/* Information Container */}
                    <View style={styles.adressListContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {addresses?.map((adress) => {
                                return (Number(adress.id) % 2 == 0)
                                    ? <View key={adress.id}>
                                        <Divider />
                                        <AdressContainer
                                            key={adress.id}
                                            adressTitle={adress.adressTitle}
                                            adressDetails={adress.adressDescription}
                                            currentAdress={adress.currentAdress}
                                            onPress={() => { }}
                                        />
                                        <Divider />
                                    </View>
                                    : <AdressContainer
                                        key={adress.id}
                                        adressTitle={adress.adressTitle}
                                        adressDetails={adress.adressDescription}
                                        currentAdress={adress.currentAdress}
                                        onPress={() => { }}
                                    />
                            })}
                        </ScrollView>
                    </View>
                </View>
            </View>
            <BottomButtonLayout
                title="Yeni Kayıt Ekle"
                onPress={handleAddNewRecordButton}
            />
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#0000',
    },
    pagePadding: {
        paddingHorizontal: 20,
    },
    adressListContainer: {
        paddingTop: 20,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: '#EEF0F4',
        maxHeight: height * 0.65,
    }
})