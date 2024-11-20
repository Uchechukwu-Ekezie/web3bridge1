import { useState } from 'react';

const BookingForm = ({ onConfirm }) => {
  const [membership, setMembership] = useState('Basic');
  const [hours, setHours] = useState(1);

  const calculatePrice = () => {
    // Example logic: price based on membership and hours
    const basePrice = membership === 'Premium' ? 1125 : 1000;
    const discount = membership === 'Premium' ? 0.1 : 0;
    return basePrice * hours * (1 - discount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = calculatePrice();
    if (typeof onConfirm === 'function') {
      onConfirm(total);  // Ensure onConfirm is called only if it is a function
    }
    alert(`Booking Confirmed! Total Cost: ₦${total.toFixed(2)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Membership:
        <select value={membership} onChange={(e) => setMembership(e.target.value)}>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
        </select>
      </label>
      <label>
        Hours:
        <input type="number" value={hours} onChange={(e) => setHours(Number(e.target.value))} />
      </label>
      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
