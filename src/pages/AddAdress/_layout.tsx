import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import * as yup from 'yup';
import { Formik } from "formik";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { BaseView, BottomButtonLayout, ErrorText, Loading, PrimaryInput, PrimarySheet, SingleSelectDropdown } from "../../components";
import { addAdress, AppDispatch, fetchCities, RootState } from "../../redux";
import { Adress } from "../../model";
import { Colors, Padding } from "../../constants";


export default function AddAdress({ navigation }: { navigation: any }) {
    const { t } = useTranslation();
    const { cities, loading, error } = useSelector((state: RootState) => state.cities);
    const { loading: addressLoading, error: addressError } = useSelector((state: RootState) => state.adress);
    const dispatch = useDispatch<AppDispatch>()
    let citiesMemoArray = useMemo(() => cities?.map((item) => ({ key: item.city, value: item.city })), [cities]);

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['25%', '25%'], []);
    const handlePresentModalPress = useCallback(() => { bottomSheetModalRef.current?.present(); }, []);
    const handleSheetChanges = useCallback((index: number) => { console.log('handleSheetChanges', index); }, []);

    function handleOnSubmit(value: Adress) {
        setTimeout(() => {
            try {
                handlePresentModalPress();
                try {
                    dispatch(addAdress({ formValue: value }))
                    setTimeout(() => {
                        navigation.pop();
                    }, 5000);
                } catch (error) {
                    throw error;
                }
            } catch (error) {
                throw error;
            }
        }, 0);
    }

    let formSchema = yup.object({
        adressTitle: yup.string().min(1, t('too-short')).max(50, t('too-long')).required(),
        adressProvince: yup.string().required(),
        adressDescription: yup.string().min(1, t('too-short')).max(50, t('too-long')).required(),
    });

    useEffect(() => { dispatch(fetchCities()) }, [])

    if (loading) { return < Loading /> }

    else if (error || addressError) { return <ErrorText error={error} /> }

    return <BottomSheetModalProvider>
        <BaseView>
            <Formik
                initialValues={{
                    adressTitle: '',
                    adressProvince: '',
                    adressDescription: ''
                }}
                validationSchema={formSchema}
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
                    <View style={styles.formContainer}>
                        <ScrollView contentContainerStyle={styles.formScrollContainer}>
                            <View style={[styles.pagePadding, styles.innerContainer]}>
                                <PrimaryInput
                                    label={t("address-title")}
                                    onChangeText={handleChange('adressTitle')}
                                    value={values.adressTitle}
                                />
                                <View style={{ paddingVertical: Padding.p12, }}>
                                    <SingleSelectDropdown
                                        placeholder={t("province")}
                                        setSelected={handleChange('adressProvince')}
                                        searchPlaceholder={t("search")}
                                        data={citiesMemoArray!}
                                    />
                                </View>
                                <PrimaryInput
                                    label={t("address-detail")}
                                    onChangeText={handleChange('adressDescription')}
                                    value={values.adressDescription}
                                />
                            </View>
                        </ScrollView>
                        <BottomButtonLayout
                            title={t('save')}
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
                title={t('address-saved')}
                bottomSheetModalRef={bottomSheetModalRef}
                snapPoints={snapPoints}
                handleSheetChanges={handleSheetChanges}
            />
        </BaseView>
    </BottomSheetModalProvider>
}

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    formContainer: {
        flex: 1,
        paddingTop: Padding.p30
    },
    formScrollContainer: {
        justifyContent: 'space-between'
    },
    pagePadding: {
        paddingHorizontal: Padding.p20,
    },
})