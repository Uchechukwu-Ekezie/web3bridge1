import React, { useState } from "react";
import PropTypes from "prop-types";

const BookingForm = ({ desks, onBook }) => {
  const [deskId, setDeskId] = useState("");
  const [hours, setHours] = useState(1);
  const [membershipType, setMembershipType] = useState("basic");

  const handleSubmit = (e) => {
    e.preventDefault();
    const desk = desks.find((desk) => desk.id === Number(deskId));

    if (!desk) {
      alert("Invalid desk ID");
      return;
    }

    if (desk.booked) {
      alert("Desk is already booked");
      return;
    }

    onBook(Number(deskId), Number(hours), membershipType);
    setDeskId("");
    setHours(1);
    setMembershipType("basic");
  };

  return (
    <section className="p-4 my-4 bg-white rounded shadow">
      <h2 className="mb-2 text-lg font-bold">Book a Desk</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label className="block mb-1">Desk ID:</label>
          <input
            type="number"
            min="1"
            max="15"
            value={deskId}
            onChange={(e) => setDeskId(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Hours:</label>
          <input
            type="number"
            min="1"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Membership Type:</label>
          <select
            value={membershipType}
            onChange={(e) => setMembershipType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="basic">Basic ($10/hr)</option>
            <option value="premium">Premium ($15/hr)</option>
            <option value="executive">Executive ($20/hr)</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </section>
  );
};

// Prop validation
BookingForm.propTypes = {
  desks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.oneOf(["individual", "team"]).isRequired,
      booked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onBook: PropTypes.func.isRequired,
};

export default BookingForm;
