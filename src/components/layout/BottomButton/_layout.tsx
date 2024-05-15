import { StyleSheet, View } from "react-native";
import { Divider } from "../../divider";
import { PrimaryButton } from "../../button";

type BottomButtonLayoutProps = {
    title: string;
    onPress: () => void
    disabled?: boolean
}


const BottomButtonLayout: React.FC<BottomButtonLayoutProps> = ({
    title,
    onPress,
    disabled,
}) => {
    return <View>
        <Divider />
        <View style={[styles.pagePadding, styles.buttonStyle]}>
            <PrimaryButton
                title={title}
                onPress={onPress}
                disabled={disabled}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    pagePadding: {
        paddingHorizontal: 20,
    },
    buttonStyle: {
        paddingTop: 15,
    },
})


export default BottomButtonLayout;