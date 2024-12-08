import React from "react";
import PropTypes from "prop-types";

const DeskLayout = ({ desks }) => {
  return (
    <section className="my-4">
      <h2 className="mb-2 text-lg font-bold">Desk Layout</h2>
      <div className="grid grid-cols-5 gap-4">
        {desks.map((desk) => (
          <div
            key={desk.id}
            className={`p-4 border rounded text-center ${
              desk.booked ? "bg-red-300" : desk.type === "team" ? "bg-yellow-200" : "bg-green-200"
            }`}
          >
            {desk.type === "team" ? "Team" : "Individual"} Desk {desk.id}
          </div>
        ))}
      </div>
    </section>
  );
};

// Prop validation
DeskLayout.propTypes = {
  desks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.oneOf(["individual", "team"]).isRequired,
      booked: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default DeskLayout;
