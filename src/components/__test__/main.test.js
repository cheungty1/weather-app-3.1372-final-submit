// Unit Test
import {render, screen} from '@testing-library/react'
import PageNotFound from "../pageNotFound"

test('Test component renders from results prop', () => {
 render(<PageNotFound pageNotFound="results" />);
 const mainElement = screen.getByText(/results/i);
 expect(mainElement).toBeInTheDocument();
});
