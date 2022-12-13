import React from 'react';
import App from './app';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';


test('Clicking the trash basket button should remove an employee' , async () => {
    render(<App/>);
 
    //Retrieve the trash button
    const button = screen.getAllByRole('button', { name: /trash/i })[0];

    //Mimic clicking on the button
    userEvent.click(button);

    //Grab the employee record 
    const removedEmployee = screen.queryByText('John C')
    expect(removedEmployee).toBeNull()
});

test('Clicking the bonus filter button should show only the employees receiving bonus' , async () => {
    render(<App/>);
 
    //Retrieve the bonus button
    const button = screen.getByRole('button', { name: "Will receive a bonus"});

    //Mimic clicking on the button
    userEvent.click(button);

    //Grab the employee record 
    const employee = screen.queryByText('Mike K')
    expect(employee).toBeInTheDocument();
});