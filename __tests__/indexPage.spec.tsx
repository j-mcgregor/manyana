import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    render(<h1>Hello</h1>);

    const heading = screen.getByRole('heading', {
      name: /hello/i
    });

    expect(heading).toBeInTheDocument();
  });
});
