import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import PrimaryInput from "./_layout";

test("renders PrimaryInput correctly", () => {
    const mockOnChangeText = jest.fn();
    const label = "Email";
    const value = "test@example.com";

    const { getByText, getByDisplayValue } = render(
        <PrimaryInput label={label} onChangeText={mockOnChangeText} value={value} />
    );

    // Etiketin doğru şekilde render edildiğini kontrol et
    const labelText = getByText(label);
    expect(labelText).toBeTruthy();

    // Değerin doğru şekilde render edildiğini kontrol et
    const inputValue = getByDisplayValue(value);
    expect(inputValue).toBeTruthy();
});

test("calls onChangeText when text input changes", () => {
    const mockOnChangeText = jest.fn();
    const label = "Email";
    const value = "";

    const { getByTestId } = render(
        <PrimaryInput label={label} onChangeText={mockOnChangeText} value={value} />
    );

    const inputElement = getByTestId("primary-input");
    fireEvent.changeText(inputElement, "new value");

    expect(mockOnChangeText).toHaveBeenCalledWith("new value");
});
