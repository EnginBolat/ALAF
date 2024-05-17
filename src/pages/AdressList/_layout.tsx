import React, { useCallback, useEffect } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AdressContainer, BottomButtonLayout, ComponentTitle, Divider, ErrorText, Loading } from "../../components";
import { AppDispatch, RootState, adressList } from "../../redux";
import { Colors } from "../../constants";
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from "@react-navigation/native";
import { Adress } from "../../model";
const { height } = Dimensions.get('window');


export default function AdressList({ navigation }) {
    const { t } = useTranslation();
    const { addresses, loading, error, } = useSelector((state: RootState) => state.adress);
    const dispatch = useDispatch<AppDispatch>()

    // Ekrana her focus olunduğunda adresleri çeken metot tekrardan çalışır.
    useFocusEffect(
        useCallback(() => {
            dispatch(adressList());
        }, [dispatch])
    );

    if (loading) { return < Loading /> } // State loading durumundaysa
    else if (error) { return <ErrorText error={error} /> } // Listeyi alırken herhangi bir sorunla karşılaşılırsa

    // Adres Ekleme Sayfasına Yönlendirir
    const handleAddNewRecordButton = useCallback(() => {
        navigation.navigate('AddAdress');
    }, [navigation]);

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
                                return <AddressItem key={adress.id} address={adress} />
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

interface AdressItemProps {
    address: Adress;
}

const AddressItem: React.FC<AdressItemProps> = ({ address }) => {
    return <View>
        (Number(address.id) % 2 == 0)
        ? <View key={address.id}>
            <Divider />
            <AdressContainer
                key={address.id}
                adressTitle={address.adressTitle}
                adressDetails={address.adressDescription}
                currentAdress={address.currentAdress}
                onPress={() => { }}
            />
            <Divider />
        </View>
        : <AdressContainer
            key={address.id}
            adressTitle={address.adressTitle}
            adressDetails={address.adressDescription}
            currentAdress={address.currentAdress}
            onPress={() => { }}
        />
    </View>
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
        maxHeight: height * 0.60,
    }
})