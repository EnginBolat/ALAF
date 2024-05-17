import { StyleSheet, Text, View } from "react-native"
import { Colors } from "../../../constants"

type ErrorTextProps = {
    error: string
}

const ErrorText: React.FC<ErrorTextProps> = ({ error }) => {
    return <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
    </View>
}

export default ErrorText;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'
    },
    error: {
        fontWeight: '500',
        fontSize: 18,
        textAlign: 'center',
        color: Colors.secondaryTitle,
    },
})
