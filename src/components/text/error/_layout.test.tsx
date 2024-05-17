import React from "react";
import ErrorText from "./_layout";
import { render } from "@testing-library/react-native";

test('renders ErrorText correctly', () => {
    const { getByText } = render(<ErrorText error="Error" />)
    expect(getByText);
})

test('ErrorText component', () => {
    const text = "Error";

    const { getByText } = render(<ErrorText error={text} />)

    const errorElement = getByText(text);
    expect(errorElement).toBeTruthy();
})