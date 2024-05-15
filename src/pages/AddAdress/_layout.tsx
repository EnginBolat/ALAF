import React, { useCallback, useMemo, useRef } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import * as yup from 'yup';
import { Formik } from "formik";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { BottomButtonLayout, PrimaryInput, PrimarySheet } from "../../components";


export default function AddAdress() {

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


    // Form Scheme
    let formScheme = yup.object({
        adressTitle: yup.string().min(1, 'Daha uzun bir başlık gerekli').max(50, 'Daha kısa bir başlık gerekli').required(),
        adressDescription: yup.string().min(1, 'Daha uzun bir açıklama gerekli').max(50, 'Daha kısa bir açıklama gerekli').required(),
    });


    return <BottomSheetModalProvider>
        <SafeAreaView style={{ flex: 1, }}>
            <Formik
                initialValues={{
                    adressTitle: '',
                    adressDescription: ''
                }}
                validationSchema={formScheme}
                onSubmit={values => {
                    console.log(values)
                    handlePresentModalPress();
                }}
            >
                {({ handleChange, handleSubmit, values, }) => (
                    <View style={{ flex: 1, }}>
                        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}>
                            <View style={[styles.pagePadding, styles.innerContainer]}>
                                <PrimaryInput
                                    label='Adres başlığı (Ev, işyeri vs.)'
                                    onChangeText={handleChange('adressTitle')}
                                    value={values.adressTitle}
                                />
                                <View style={{ paddingVertical: 12, }}>
                                    <PrimaryInput
                                        label='İl'
                                        onChangeText={handleChange('adressTitle')}
                                        value={values.adressTitle}
                                    />
                                </View>
                                <PrimaryInput
                                    label='Adres Detayı'
                                    onChangeText={handleChange('adressDescription')}
                                    value={values.adressDescription}
                                />
                            </View>
                        </ScrollView>
                        {/* <View>
                            <Divider />
                            <View style={[styles.pagePadding, styles.buttonStyle]}>
                                <PrimaryButton
                                    title="Kaydet"
                                    onPress={handleSubmit}
                                    disabled={values.adressDescription.length > 1 && values.adressTitle.length > 1 ? false : true}
                                />
                            </View>
                        </View> */}
                        <BottomButtonLayout
                            title="Kaydet"
                            onPress={handleSubmit}
                            disabled={values.adressDescription.length > 1 && values.adressTitle.length > 1 ? false : true}
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