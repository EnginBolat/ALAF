import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import * as yup from 'yup';
import { Formik } from "formik";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useDispatch, useSelector } from "react-redux";

import { BottomButtonLayout, ErrorText, Loading, PrimaryInput, PrimarySheet } from "../../components";
import { addAdress, AppDispatch, fetchCities, RootState } from "../../redux";
import { SelectList } from "react-native-dropdown-select-list";
import { Adress } from "../../model";


export default function AddAdress({ navigation }: { navigation: any }) {
    const { cities, loading, error } = useSelector((state: RootState) => state.cities);
    const { loading: addressLoading, error: addressError } = useSelector((state: RootState) => state.adress);
    const dispatch = useDispatch<AppDispatch>()
    let newArray = cities?.map((item) => {
        return { key: item.city, value: item.city }
    })

    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '25%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    function handleOnSubmit(value: Adress) {
        setTimeout(() => {
            try {
                handlePresentModalPress();
                dispatch(addAdress({ formValue: value }))
                setTimeout(() => {
                    navigation.pop();
                }, 5000);
            } catch (error) {
                throw error;
            }
        }, 0);
    }

    // Form Scheme
    let formScheme = yup.object({
        adressTitle: yup.string().min(1, 'Daha uzun bir başlık gerekli').max(50, 'Daha kısa bir başlık gerekli').required(),
        adressProvince: yup.string().required(),
        adressDescription: yup.string().min(1, 'Daha uzun bir açıklama gerekli').max(50, 'Daha kısa bir açıklama gerekli').required(),
    });

    useEffect(() => { dispatch(fetchCities()) }, [])
    if (loading) { return < Loading /> }
    else if (error || addressError) { return <ErrorText error={error} /> }

    return <BottomSheetModalProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Formik
                initialValues={{
                    adressTitle: '',
                    adressProvince: '',
                    adressDescription: ''
                }}
                validationSchema={formScheme}
                onSubmit={values => {
                    var adress: Adress = {
                        adressTitle: values.adressTitle,
                        city: values.adressProvince,
                        adressDescription: values.adressDescription,
                        currentAdress: values.adressProvince,
                    };
                    handleOnSubmit(adress);
                }}
            >
                {({ handleChange, handleSubmit, values, }) => (
                    <View style={{ flex: 1, paddingTop: 30 }}>
                        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}>
                            <View style={[styles.pagePadding, styles.innerContainer]}>
                                <PrimaryInput
                                    label='Adres başlığı (Ev, işyeri vs.)'
                                    onChangeText={handleChange('adressTitle')}
                                    value={values.adressTitle}
                                />
                                <View style={{ paddingVertical: 12, }}>
                                    <SelectList
                                        placeholder="İl"
                                        setSelected={handleChange('adressProvince')}
                                        searchPlaceholder="Ara"
                                        data={newArray!}
                                        searchicon={null!}
                                        boxStyles={{
                                            alignItems: 'center',
                                            borderWidth: 1,
                                            borderStyle: 'solid',
                                            borderColor: '#E6E9EE',
                                            backgroundColor: '#FCFCFD',
                                            paddingVertical: 24,
                                            paddingHorizontal: 16,
                                            borderRadius: 8,
                                        }}
                                        dropdownTextStyles={{
                                            paddingVertical: 12
                                        }}
                                        dropdownStyles={{
                                            backgroundColor: '#FCFCFD',
                                            borderColor: '#E6E9EE',
                                            borderWidth: 1,
                                        }}
                                    />
                                </View>
                                <PrimaryInput
                                    label='Adres Detayı'
                                    onChangeText={handleChange('adressDescription')}
                                    value={values.adressDescription}
                                />
                            </View>
                        </ScrollView>
                        <BottomButtonLayout
                            title="Kaydet"
                            onPress={handleSubmit}
                            disabled={values.adressProvince.length > 1 && values.adressDescription.length > 1 && values.adressTitle.length > 1 ? false : true}
                            loading={addressLoading}
                        />
                    </View>
                )}
            </Formik>
            <PrimarySheet
                isHaveIcon={true}
                isSuccess={true}
                title="Adresin başarıyla kaydedildi!"
                bottomSheetModalRef={bottomSheetModalRef}
                snapPoints={snapPoints}
                handleSheetChanges={handleSheetChanges}
            />
        </SafeAreaView>
    </BottomSheetModalProvider>
}

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        backgroundColor: '#0000',
    },
    pagePadding: {
        paddingHorizontal: 20,
    },
})