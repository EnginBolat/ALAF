import { StyleSheet, View } from "react-native";
import { Divider } from "../../divider";
import { PrimaryButton } from "../../button";
import { Padding } from "../../../constants";

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
    return <View testID="layout">
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
        paddingHorizontal: Padding.p20,
        marginBottom: Padding.p16,
    },
    buttonStyle: {
        paddingTop: Padding.p16,
    },
})


export default BottomButtonLayout;