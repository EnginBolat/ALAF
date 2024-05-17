import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants";

export default function Divider() {
    return <View style={styles.container} />
}

const styles = StyleSheet.create({
    container: {
        height: 1,
        backgroundColor: Colors.primaryBorder,
    }
})