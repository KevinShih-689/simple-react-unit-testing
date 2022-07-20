import { cleanup, fireEvent, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import CheckBox from "../checkbox";

/** 
 * NOTE:
 * Running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
 * unmount and cleanup DOM after the test is finished.
 * */ 
afterEach(cleanup)

it('Checkbox change the text after click', () => {
    /* render into a container which is appended to document.body. */
    const { queryByLabelText, getByLabelText } = render(
        <CheckBox labelOn={"On"} labelOff={"Off"} />
    )

    expect(queryByLabelText(/off/i)).toBeTruthy();

    fireEvent.click(getByLabelText(/off/i));

    expect(queryByLabelText(/on/i)).toBeTruthy();
})

test('renders a message', () => {
    const { asFragment, getByText, getAllByLabelText ,getByRole } = render(
        <div>
            <a>Hello world!</a>
            <input type="button" />
        </div>
    )
    /**
     * [ getByText ]
     * To check the element in render component with the text you define
     * */ 
    expect(getByText('Hello world!')).toBeInTheDocument();

    /**
     * [ getByRole ]
     * To query the element with the given role.
     * Default roles are taken into consideration e.g. <button /> has the button role without explicitly setting the role attribute. 
     */
    expect(getByRole('button')).toBeInTheDocument();
})