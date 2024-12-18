import { render, screen } from '@/test-utils';
import { Landing } from './Landing';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Landing />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
