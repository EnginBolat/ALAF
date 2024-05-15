import { StyleSheet, View } from "react-native";

export default function Divider() {
    return <View style={styles.container} />
}

const styles = StyleSheet.create({
    container: {
        height: 1,
        backgroundColor: '#EEF0F4',
    }
})