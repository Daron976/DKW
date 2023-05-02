import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../home';

describe('Homepage', () => {
  test('Homepage should render as expected', async () => {
    const snapHomepage = renderer
      .create(
        <BrowserRouter>
          <Home />
        </BrowserRouter>,
      )
      .toJSON();

    expect(snapHomepage).toMatchSnapshot();
  });

  test('Homepage loads and displays relevant text', async () => {
    render(<Home />);

    const displayedText = screen.getByText('Daron Wiafe');

    waitFor(() => {
      expect(displayedText).toBeInTheDocument();
    });
  });
});
