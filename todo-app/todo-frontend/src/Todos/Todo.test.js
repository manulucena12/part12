import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { TodoComponent } from './Todo'; 

describe('TodoComponent', () => {
  test('renders an empty list when todos is empty', () => {
    render(<TodoComponent todos={[]} />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0); 
  });

  test('renders the list of todos correctly', () => {
    const todos = [
      { text: 'Buy groceries' },
      { text: 'Walk the dog' },
      { text: 'Do homework' }
    ];

    render(<TodoComponent todos={todos} />);

    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(screen.getByText('Walk the dog')).toBeInTheDocument();
    expect(screen.getByText('Do homework')).toBeInTheDocument();
  });

  test('renders no list items if todos is null', () => {
    render(<TodoComponent todos={null} />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});

