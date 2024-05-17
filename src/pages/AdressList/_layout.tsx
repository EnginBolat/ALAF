import React, { memo, useCallback } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';

import { AdressContainer, BottomButtonLayout, ComponentTitle, Divider, ErrorText, Loading } from "../../components";
import { AppDispatch, RootState, adressList } from "../../redux";
import { Colors } from "../../constants";
import { Adress } from "../../model";
const { height } = Dimensions.get('window');

interface AdressListProps {
    navigation: any
}


const AdressList: React.FC<AdressListProps> = ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>()

    /**
     * Redux kullanarak global state içerisindeki adres listesini süresince gereken verileri alır 
    */
    const { addresses, loading, error, } = useSelector((state: RootState) => state.adress);

    /**
     * Ekrana her focus olunduğunda adresleri çeken metot tekrardan çalışır
    */
    useFocusEffect(
        useCallback(() => {
            dispatch(adressList());
        }, [dispatch])
    );

    /** 
     * Adres Ekleme Sayfasına Yönlendirir 
    */
    const handleAddNewRecordButton = useCallback(() => {
        navigation.navigate('AddAdress');
    }, [navigation]);

    /**
     * State loading durumundaysa
    */
    if (loading) { return < Loading /> }

    /**
     * Listeyi alırken herhangi bir sorunla karşılaşılırsa
    */
    else if (error) { return <ErrorText error={error} /> } // 

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.pagePadding}>
                    {/* Title */}
                    <ComponentTitle title={t('registered-addresses')} paddingTop={height * 0.04} />
                    <View style={{ height: 10 }} />
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


/**
 * Adresleri gösterek olan komponent içerisinde kullanacak veriler
*/
interface AddressItemProps {
    address: Adress;
}

/**
 * React.memo kullanılmasının sebebi, address değerinin değişmediği seneryoda yeniden render işlemi yapmaması. Böylelikle uygulamaya performans kazandırması
*/
const AddressItem: React.FC<AddressItemProps> = React.memo(({ address }) => {

    const isDividerRendered = Number(address.id) % 2 == 0;

    return <View key={address.id}>
        {isDividerRendered && <Divider />}
        <AdressContainer
            key={address.id}
            adressTitle={address.adressTitle}
            adressDetails={address.adressDescription}
            currentAdress={address.currentAdress}
            onPress={() => { }}
        />
        {isDividerRendered && <Divider />}
    </View>
});

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

export default AdressList;