import React, { useCallback } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';

import { AdressContainer, BottomButtonLayout, ComponentTitle, Divider, ErrorText, Loading } from "../../components";
import { AppDispatch, RootState, adressList } from "../../redux";
import { Colors, Padding, Radius } from "../../constants";
import { Adress } from "../../model";
const { height } = Dimensions.get('window');

interface AdressListProps {
    navigation: any
}

const AdressList: React.FC<AdressListProps> = ({ navigation }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>()

    const { addresses, loading, error, } = useSelector((state: RootState) => state.adress);

    useFocusEffect(
        useCallback(() => {
            dispatch(adressList());
        }, [dispatch])
    );

    const handleAddNewRecordButton = useCallback(() => {
        navigation.navigate('AddAdress');
    }, [navigation]);

    if (loading) { return < Loading /> }

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
                            {addresses?.map((adress, index) => {
                                return <AddressItem key={adress.id} address={adress} index={index} />
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


interface AddressItemProps {
    address: Adress;
    index: number
}

const AddressItem: React.FC<AddressItemProps> = React.memo(({ address, index }) => {

    const isDividerRendered = index % 2 == 1;

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
        flex: 1,
        paddingHorizontal: Padding.p20,
    },
    adressListContainer: {
        paddingTop: Padding.p20,
        paddingHorizontal: Padding.p16,
        borderWidth: 1,
        borderRadius: Radius.r8,
        borderStyle: 'solid',
        borderColor: Colors.primaryBorder,
        marginBottom: 12,
        flex: 1,
    }
})

export default AdressList;