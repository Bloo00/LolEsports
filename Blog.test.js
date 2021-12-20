import { render, screen } from '@testing-library/react';
import App from './App';
import Blog from './Blog';

test('renders Blog Posts Template subtitle', () => {
    render(<Blog />);
    const subtitleElement = screen.getByText(/DECEMBER 14, 2021 - BY LOLESPORTS STAFF/i);
    expect(subtitleElement).toBeInTheDocument();
});