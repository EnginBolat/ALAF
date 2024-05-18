import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { IcSuccess } from "../../../assets";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Padding } from "../../../constants";

type PrimarySheetProps = {
    bottomSheetModalRef: any,
    snapPoints: any
    handleSheetChanges: any,
    title: string,
    isSuccess?: boolean;
    isHaveIcon?: boolean;
}

const PrimarySheet: React.FC<PrimarySheetProps> = ({
    bottomSheetModalRef,
    snapPoints,
    handleSheetChanges,
    title,
    isSuccess,
    isHaveIcon
}) => {
    return <BottomSheetModal
        enableContentPanningGesture={false}
        ref={bottomSheetModalRef}
        enablePanDownToClose={false}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleIndicatorStyle={styles.bsIndicator}
        containerStyle={styles.bsBackground}
    >
        <BottomSheetView
            style={styles.bsContentContainer}>
            {isHaveIcon && <View style={styles.bsIconContainer}>
                {isSuccess
                    ? <IcSuccess fill={Colors.button} />
                    // Buraya getirelecek error iconu ile error handle edilebilir.
                    : <IcSuccess fill={Colors.button} />}
            </View>}
            <Text style={styles.bsTitle}>{title}</Text>

        </BottomSheetView>
    </BottomSheetModal>;
}


const styles = StyleSheet.create({
    bsBackground: {
        backgroundColor: Colors.white,
    },
    bsIndicator: {
        backgroundColor: Colors.primaryBorder,
    },
    bsContentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bsIconContainer: {
        padding: Padding.p16,
        backgroundColor: Colors.success,
        borderRadius: 100
    },
    bsTitle: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 16,
        paddingTop: Padding.p16,
    }
})

export default PrimarySheet;