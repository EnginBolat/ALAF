import React, { useCallback } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';

import { AdressContainer, BaseView, BottomButtonLayout, ComponentTitle, Divider, ErrorText, Loading, Swipable } from "../../components";
import { AppDispatch, RootState, adressList, deleteAdress } from "../../redux";
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
        <BaseView>
            {(addresses?.length ?? 0) < 1
                ? <ErrorText error="Kayılı Adres Bulunamadı" />
                : <View style={styles.innerContainer}>
                    <View style={styles.pagePadding}>
                        {/* Title */}
                        <ComponentTitle title={t('registered-addresses')} paddingTop={height * 0.04} />
                        <View style={{ height: 10 }} />
                        <View style={styles.adressListContainer}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {addresses?.map((adress, index) => {
                                    return <AddressItem
                                        key={adress.id}
                                        address={adress}
                                        index={index}
                                        dispatch={dispatch}
                                    />
                                })}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            }
            <BottomButtonLayout
                title={t('add-new-record')}
                onPress={handleAddNewRecordButton}
            />
        </BaseView>
    )
}


interface AddressItemProps {
    address: Adress;
    index: number,
    dispatch: any;
}

const AddressItem: React.FC<AddressItemProps> = React.memo(({ address, index, dispatch }) => {

    const isDividerRendered = index % 2 == 1;

    return <View key={address.id}>
        {isDividerRendered && <Divider />}
        <Swipable onPress={() => {
            dispatch(deleteAdress({ id: address.id!, isDeleted: true }))
        }}>
            <AdressContainer
                key={address.id}
                adressTitle={address.adressTitle}
                adressDetails={address.adressDescription}
                currentAdress={address.currentAdress}
                onPress={() => { }}
            />
        </Swipable>
        {isDividerRendered && <Divider />}
    </View >
});
const styles = StyleSheet.create({
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