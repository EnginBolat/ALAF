import React from "react";
import { render } from '@testing-library/react-native'
import Divider from './_layout';

test('renders Divider correctly', () => {
    const { getByText } = render(<Divider />)
    expect(getByText);
})