// Unit Test
import {render, screen} from '@testing-library/react'
import About from "../about"

test('Test component renders from results prop', () => {
 render(<About twitterName="results" />);
 const mainElement = screen.getByText(/results/i);
 expect(mainElement).toBeInTheDocument();
});