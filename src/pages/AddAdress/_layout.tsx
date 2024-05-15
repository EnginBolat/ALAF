import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Divider, PrimaryButton, PrimaryInput } from "../../components";
import * as yup from 'yup';
import { Formik } from "formik";


export default function AddAdress() {

    let formScheme = yup.object({
        adressTitle: yup.string().min(1, 'Daha uzun bir başlık gerekli').max(50, 'Daha kısa bir başlık gerekli').required(),
        adressDescription: yup.string().min(1, 'Daha uzun bir açıklama gerekli').max(50, 'Daha kısa bir açıklama gerekli').required(),
    });


    return <SafeAreaView style={{ flex: 1, }}>
        <Formik
            initialValues={{
                adressTitle: '',
                adressDescription: ''
            }}
            validationSchema={formScheme}
            onSubmit={values => console.log(values)}
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
                    <View>
                        <Divider />
                        <View style={[styles.pagePadding, styles.buttonStyle]}>
                            <PrimaryButton
                                title="Yeni Kayıt Ekle"
                                onPress={handleSubmit}
                                disabled={values.adressDescription.length > 1 && values.adressTitle.length > 1 ? false : true}
                            />
                        </View>
                    </View>
                </View>
            )}
        </Formik>
    </SafeAreaView>
}


const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        backgroundColor: '#0000',
    },
    pagePadding: {
        paddingHorizontal: 20,
    },
    buttonStyle: {
        paddingTop: 15,
    },
})