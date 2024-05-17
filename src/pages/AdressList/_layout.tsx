import React, { useEffect } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AdressContainer, BottomButtonLayout, ComponentTitle, Divider, ErrorText, Loading } from "../../components";
import { AppDispatch, RootState, adressList } from "../../redux";
import { Colors } from "../../constants";
import { useTranslation } from 'react-i18next';
const { height } = Dimensions.get('window');


export default function AdressList({ navigation }) {
    const { t } = useTranslation();
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
                    <ComponentTitle title={t('registered-addresses')} paddingTop={height * 0.04} />
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
                title={t('add-new-record')}
                onPress={handleAddNewRecordButton}
            />
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
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
        borderColor: Colors.primaryBorder,
        maxHeight: height * 0.65,
    }
})