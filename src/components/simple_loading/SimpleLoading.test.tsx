import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {SimpleLoading} from './SimpleLoading';

test('renders without crashing', () => {
  const { getByText } = render(<SimpleLoading />);
  expect(getByText(/loading/i)).toBeInTheDocument();
});
