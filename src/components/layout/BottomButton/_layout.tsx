import { StyleSheet, View } from "react-native";
import { Divider } from "../../divider";
import { PrimaryButton } from "../../button";

type BottomButtonLayoutProps = {
    title: string;
    onPress: () => void
    disabled?: boolean
    loading?: boolean,
}


const BottomButtonLayout: React.FC<BottomButtonLayoutProps> = ({
    title,
    onPress,
    disabled,
    loading
}) => {
    return <View>
        <Divider />
        <View style={[styles.pagePadding, styles.buttonStyle]}>
            <PrimaryButton
                title={title}
                onPress={onPress}
                disabled={disabled}
                loading={loading}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    pagePadding: {
        paddingHorizontal: 20,
        marginBottom: 16
    },
    buttonStyle: {
        paddingTop: 16,
    },
})


export default BottomButtonLayout;