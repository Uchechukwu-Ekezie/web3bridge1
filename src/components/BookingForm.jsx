import { useState } from "react";
import PropTypes from "prop-types";

const BookingForm = ({ onConfirm }) => {
  const [membership, setMembership] = useState("Basic");
  const [hours, setHours] = useState(1);

  const calculatePrice = () => {
    const prices = { Basic: 750, Premium: 1125, Executive: 1500, Team: 1875 };
    let total = prices[membership] * hours;

    if (hours > 3) {
      total *= 0.9;
    }

    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = calculatePrice();
    onConfirm(total);
    alert(`Booking Confirmed! Total Cost: ₦${total.toFixed(2)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-md gap-4 p-6 mx-auto mt-8 bg-white rounded-lg shadow-md"
    >
      <label className="flex flex-col font-semibold text-gray-700">
        Membership:
        <select
          value={membership}
          onChange={(e) => setMembership(e.target.value)}
          className="p-2 mt-2 border rounded-md"
        >
          <option value="Basic">Basic (₦750/hr)</option>
          <option value="Premium">Premium (₦1,125/hr)</option>
          <option value="Executive">Executive (₦1,500/hr)</option>
          <option value="Team">Team Desk (₦1,875/hr)</option>
        </select>
      </label>
      <label className="flex flex-col font-semibold text-gray-700">
        Hours:
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          min="1"
          className="p-2 mt-2 border rounded-md"
        />
      </label>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Confirm Booking
      </button>
    </form>
  );
};


BookingForm.propTypes = {
  onConfirm: PropTypes.func.isRequired,
};

export default BookingForm;
