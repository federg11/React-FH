import { describe, expect, test } from "vitest";
import { ItemCounter } from "./itemCounter";
import { render, screen } from "@testing-library/react";

describe('ItemCounter', () => {
    test('should render with default values', () => {
        
        const name = 'Test item';

        render(<ItemCounter name="name" />);

        expect(screen.getByText('Test-item')).toBeDefined();
        expect(screen.getByText('Test-item')).not.toBeNull();
    })
})