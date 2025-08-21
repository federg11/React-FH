import {describe, expect, test} from 'vitest';
import {render} from '@testing-library/react';
import { GifApp } from "./GifApp";


describe('GifApp', () => {
    test('should render component propertly', () => {
        const {container} = render(<GifApp />);

        expect(container).toMatchSnapshot();
    })
})