import React from "react";
import { render } from '@testing-library/react-native'
import Loading from './_layout';

test('renders Loading correctly', () => {
    const { getByText } = render(<Loading />)
    expect(getByText);
})