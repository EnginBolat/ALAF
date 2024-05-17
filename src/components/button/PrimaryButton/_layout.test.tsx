import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PrimaryButton from './_layout';

describe('PrimaryButton Component', () => {
    test('renders correctly with title', () => {
        const onPressMock = jest.fn();
        const { getByTestId } = render(<PrimaryButton onPress={onPressMock} title="Submit" />);
        const buttonElement = getByTestId('button');

        expect(buttonElement).toBeTruthy();
    });

    test('fires onPress event when pressed', () => {
        const onPressMock = jest.fn();
        const { getByTestId } = render(<PrimaryButton onPress={onPressMock} title="Submit" />);
        const buttonElement = getByTestId('button');
        fireEvent.press(buttonElement);

        expect(onPressMock).toHaveBeenCalled();
    });

    test('renders loading indicator when loading is true', () => {
        const onPressMock = jest.fn();
        const { getByTestId } = render(<PrimaryButton onPress={onPressMock} title="Submit" loading />);
        const loadingIndicator = getByTestId('loadingIndicator');

        expect(loadingIndicator).toBeTruthy();
    });
});
