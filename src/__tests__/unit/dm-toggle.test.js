import { fireEvent, render, screen } from "@testing-library/react";
import DmToggle from "../../common/toggle/dm-toggle";
import TestUtils from "../../TestUtils";

const renderComponent = (params) => {
    render(
        <DmToggle {...params} />
    )
};

describe("DM toggle should", () => {
    const testId = "dm-toggle";

    it("render with a test id", async () => {
        renderComponent({
            testId, 
            on: true,
            handleClick: jest.fn()
        });

        const element = await screen.findByTestId(testId);
        expect(element).toBeInTheDocument();
    });

    it("render with custom classes", async () => {
        const classes = TestUtils.generateMockId();
        renderComponent({
            testId,
            on: false,
            classes,
            handleClick: jest.fn()
        });

        const element = await screen.findByTestId(testId);
        expect(element).toHaveClass(classes);
    });

    it("handle click", async () => {
        const mockFunc = jest.fn();

        renderComponent({
            testId,
            on: true,
            handleClick: mockFunc
        });

        const element = await screen.findByTestId(testId);
        fireEvent.click(element);
        expect(mockFunc).toHaveBeenCalled();
    });
});