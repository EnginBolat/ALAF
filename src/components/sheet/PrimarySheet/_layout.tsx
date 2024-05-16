import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { IcSuccess } from "../../../assets";
import { StyleSheet, Text, View } from "react-native";

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
                    ? <IcSuccess fill='#019693' />
                    // Buraya getirelecek error iconu ile error handle edilebilir.
                    : <IcSuccess fill='#019693' />}
            </View>}
            <Text style={styles.bsTitle}>{title}</Text>

        </BottomSheetView>
    </BottomSheetModal>;
}


const styles = StyleSheet.create({
    bsBackground: {
        backgroundColor: 'rgba(0,0,0,0.50)'
    },
    bsIndicator: {
        backgroundColor: '#EEF0F4'
    },
    bsContentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bsIconContainer: {
        padding: 16,
        backgroundColor: '#E3F7F7',
        borderRadius: 100
    },
    bsTitle: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 16,
        paddingTop: 16,
    }
})

export default PrimarySheet;