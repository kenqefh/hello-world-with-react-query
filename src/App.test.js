import { render, screen } from '@testing-library/react';
import App from './App';

describe('home', () => {
  test('should render the app logo', () => {
    render(<App />);
    expect(screen.getByRole('img', { name: 'logo' })).toBeInTheDocument();
  });

  test('renders navbar links', () => {
    render(<App />);
    const homeLinkElement = screen.getByRole('link', { name: /home/i });
    const superHeroesLinkElement = screen.getByRole('link', {
      name: /traditional super heroes/i,
    });
    const rqSuperHeroesLinkElement = screen.getByRole('link', {
      name: /rq super heroes/i,
    });

    expect(homeLinkElement).toBeInTheDocument();
    expect(superHeroesLinkElement).toBeInTheDocument();
    expect(rqSuperHeroesLinkElement).toBeInTheDocument();

    expect(homeLinkElement).toHaveAttribute('href', '/');
    expect(superHeroesLinkElement).toHaveAttribute('href', '/super-heroes');
    expect(rqSuperHeroesLinkElement).toHaveAttribute(
      'href',
      '/rq-super-heroes'
    );
  });
});
