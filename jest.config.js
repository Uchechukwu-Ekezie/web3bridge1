import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const mockOnConfirm = jest.fn();

test('calculates price correctly based on selected membership and hours', () => {
  render(<BookingForm onConfirm={mockOnConfirm} />);

  // Select 'Premium' membership
  fireEvent.change(screen.getByLabelText('Membership:'), { target: { value: 'Premium' } });

  // Set hours to 4
  fireEvent.change(screen.getByLabelText('Hours:'), { target: { value: '4' } });

  // Submit the form
  fireEvent.click(screen.getByText('Confirm Booking'));

  // Calculate expected price: 1125 * 4 = 4500, with a 10% discount = 4050
  expect(mockOnConfirm).toHaveBeenCalledWith(4050);  // Make sure the mock function is called correctly
});
