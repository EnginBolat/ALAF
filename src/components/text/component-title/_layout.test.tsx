import React from 'react';
import { render } from '@testing-library/react-native';
import ComponentTitle from './_layout';

describe('ComponentTitle', () => {
    it('renders correctly with given title', () => {
        const titleText = 'Test Title';
        const { getByTestId } = render(<ComponentTitle title={titleText} />);
        const titleElement = getByTestId('title');
        expect(titleElement).toBeTruthy();
        expect(titleElement.props.children).toBe(titleText);
    });

    it('applies correct padding styles with given padding props', () => {
        const titleText = 'Test Title';
        const padding = 10;
        const paddingTop = 15;
        const paddingBottom = 20;
        const paddingRight = 25;
        const paddingLeft = 30;

        const { getByTestId } = render(
            <ComponentTitle
                title={titleText}
                padding={padding}
                paddingTop={paddingTop}
                paddingBottom={paddingBottom}
                paddingRight={paddingRight}
                paddingLeft={paddingLeft}
            />
        );

        const titleElement = getByTestId('title');
        expect(titleElement).toBeTruthy();

        const styles = titleElement.props.style.reduce((acc: any, style: any) => {
            return { ...acc, ...style };
        }, {});

        expect(styles.padding).toBe(padding);
        expect(styles.paddingTop).toBe(paddingTop);
        expect(styles.paddingBottom).toBe(paddingBottom);
        expect(styles.paddingRight).toBe(paddingRight);
        expect(styles.paddingLeft).toBe(paddingLeft);
    });
});