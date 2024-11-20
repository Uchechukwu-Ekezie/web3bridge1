import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the BookingForm with default values', () => {
  render(<BookingForm />);
  const membershipSelect = screen.getByLabelText('Membership:');
  expect(membershipSelect.value).toBe('Basic');
  const hoursInput = screen.getByLabelText('Hours:');
  expect(hoursInput.value).toBe('1');
});

test('calculates price correctly', () => {
  render(<BookingForm />);
  fireEvent.change(screen.getByLabelText('Membership:'), { target: { value: 'Premium' } });
  fireEvent.change(screen.getByLabelText('Hours:'), { target: { value: '4' } });
  fireEvent.click(screen.getByText('Confirm Booking'));
  // your assertions here
});
