import React from "react";
import { StyleSheet, Text, View } from "react-native";


type AdressContainerProps = {
    adressTitle: string;
    adressDetails: string;
    currentAdress: string;
    leadingIcon: string;
    trailingIcon: string;
}


const AdressContainer: React.FC<AdressContainerProps> = ({
    adressTitle,
    adressDetails,
    currentAdress,
    leadingIcon,
    trailingIcon
}) => {
    return <View style={styles.container}>
        <View style={styles.innerContainer}>
            <View style={styles.iconContainer} />
            <View style={styles.adressContainer}>
                <Text style={styles.title}>{adressTitle}</Text>
                <Text style={styles.adressDetails}>{adressDetails.length >= 17
                    ? `${adressDetails.substring(0, 17)}...`
                    : adressDetails}</Text>
            </View>
        </View>
        <Text style={styles.currentAdress}>{currentAdress}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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
        width: 40
    },
    icon: {},
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
    currentAdress: {
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 15,
        color: '#3D2852',
    },
    navigationIcon: {},
})



export default AdressContainer;