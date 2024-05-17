import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IcChevronRight, IcLocation } from "../../../assets";
import { Colors, Padding, Radius } from "../../../constants";


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
                <IcLocation fill={Colors.primaryIcon} />
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
            <IcChevronRight fill={Colors.primaryTitle} />
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        padding: Padding.p10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: Padding.p16,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    adressContainer: {
        flexDirection: 'column',
        paddingLeft: Padding.p12,
    },
    iconContainer: {
        borderRadius: Radius.rounded,
        backgroundColor: Colors.primaryIconBackground,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 18,
    },
    adressDetails: {
        color: Colors.secondaryTitle,
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 15,
        paddingTop: Padding.p4,
    },
    currentAdressContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currentAdress: {
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 15,
        color: Colors.thirdTitle,
        paddingRight: Padding.p12,
    },
})



export default AdressContainer;