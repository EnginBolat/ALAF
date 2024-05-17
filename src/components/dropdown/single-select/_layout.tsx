import { SelectList } from "react-native-dropdown-select-list";
import { Colors, Padding } from "../../../constants";
import { StyleSheet } from "react-native";

interface SingleSelectDropdownProps {
    data: Array<any>
    placeholder: string;
    setSelected: any
    searchPlaceholder: string
}

const SingleSelectDropdown: React.FC<SingleSelectDropdownProps> = ({ data, placeholder, setSelected, searchPlaceholder }) => {
    return <SelectList
        placeholder={placeholder}
        inputStyles={styles.inputStyles}
        setSelected={setSelected}
        searchPlaceholder={searchPlaceholder}
        data={data}
        searchicon={null!}
        boxStyles={styles.boxStyles}
        dropdownTextStyles={styles.dropdownTextStyles}
        dropdownStyles={styles.dropdownStyles}
    />
}

const styles = StyleSheet.create({
    boxStyles: {
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.secondaryBorder,
        backgroundColor: Colors.secondaryBackground,
        paddingVertical: Padding.p24,
        paddingHorizontal: Padding.p16,
        borderRadius: 8,
    },
    dropdownTextStyles: {
        paddingVertical: Padding.p12,
    },
    dropdownStyles: {
        backgroundColor: Colors.secondaryBackground,
        borderColor: Colors.secondaryBorder,
        borderWidth: 1,
    },
    inputStyles: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 18,
        color: Colors.secondaryTitle
    }
})

export default SingleSelectDropdown;