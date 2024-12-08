import React from "react";
import PropTypes from "prop-types";

const Summary = ({ summary, revenue }) => {
  return (
    <section className="p-4 my-4 bg-white rounded shadow">
      <h2 className="mb-2 text-lg font-bold">Booking Summary</h2>
      {summary ? (
        <p>
          Desk {summary.deskId} booked for {summary.hours} hour(s). Total: $
          {summary.total.toFixed(2)}
        </p>
      ) : (
        <p>No bookings yet.</p>
      )}
      <h3 className="mt-4 text-lg font-bold">Revenue:</h3>
      <ul className="ml-4 list-disc">
        <li>Basic: ${revenue.basic.toFixed(2)}</li>
        <li>Premium: ${revenue.premium.toFixed(2)}</li>
        <li>Executive: ${revenue.executive.toFixed(2)}</li>
        <li>Team: ${revenue.team.toFixed(2)}</li>
      </ul>
    </section>
  );
};

// Prop validation
Summary.propTypes = {
  summary: PropTypes.shape({
    deskId: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }),
  revenue: PropTypes.shape({
    basic: PropTypes.number.isRequired,
    premium: PropTypes.number.isRequired,
    executive: PropTypes.number.isRequired,
    team: PropTypes.number.isRequired,
  }).isRequired,
};

export default Summary;
