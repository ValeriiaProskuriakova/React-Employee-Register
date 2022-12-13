import React from 'react';
import AppInfo from './app-info';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

test('Display the AppInfo component', () => {

  // Pass props to AppInfo component 
  const employees = "15"
  const increased  = "15"
  const raised = "15"
  const morethan1000 = "15"

  // Add your testing logic here
    render(<AppInfo 
        employees = {employees}
        increased = {increased}
        raised = {raised}
        morethan1000 = {morethan1000}
    />);
    screen.debug();
});

test('AppInfo renders Employee Register text', () => {
  render(<AppInfo />);
  expect(screen.getByText('Number of employees:')).toBeInTheDocument();
});