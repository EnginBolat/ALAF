import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IcChevronRight, IcLocation } from "../../../assets";


type AdressContainerProps = {
    adressTitle: string;
    adressDetails: string;
    currentAdress: string;
    onPress: () => void;
}


const AdressContainer: React.FC<AdressContainerProps> = ({
    adressTitle,
    adressDetails,
    currentAdress,
    onPress
}) => {
    return <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.innerContainer}>
            <View style={styles.iconContainer}>
                <IcLocation fill={'#450D87'} />
            </View>
            <View style={styles.adressContainer}>
                <Text style={styles.title}>{adressTitle}</Text>
                <Text style={styles.adressDetails}>{adressDetails.length >= 17
                    ? `${adressDetails.substring(0, 17)}...`
                    : adressDetails}</Text>
            </View>
        </View>
        <View style={styles.currentAdressContainer}>
            <Text style={styles.currentAdress}>{currentAdress}</Text>
            <IcChevronRight fill='#000000' />
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    adressContainer: {
        flexDirection: 'column',
        paddingLeft: 12,
    },
    iconContainer: {
        borderRadius: 100,
        backgroundColor: '#F1EEF7',
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 18,
    },
    adressDetails: {
        color: "#6F6085",
        fontWeight: 300,
        fontSize: 12,
        lineHeight: 15,
        paddingTop: 4,
    },
    currentAdressContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currentAdress: {
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 15,
        color: '#3D2852',
        paddingRight: 12,
    },
})



export default AdressContainer;