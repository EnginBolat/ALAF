import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BottomButtonLayout from './_layout';


describe('BottomButtonLayout', () => {
    test('renders correctly with title', () => {
        const onPressMock = jest.fn();
        const title = 'Submit';

        const { getByText, getByTestId } = render(
            <BottomButtonLayout title={title} onPress={onPressMock} />
        );

        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('layout')).toBeTruthy();
    });

    test('calls onPress function when button is pressed', () => {
        const onPressMock = jest.fn();
        const title = 'Submit';

        const { getByText } = render(
            <BottomButtonLayout title={title} onPress={onPressMock} />
        );

        const buttonElement = getByText(title);
        fireEvent.press(buttonElement);

        expect(onPressMock).toHaveBeenCalledTimes(1);
    });
});
