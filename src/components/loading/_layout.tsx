import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Loading() {
    return <View style={styles.container} testID="container">
        <ActivityIndicator />
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
})