import { useState } from "react";

const DeskGrid = () => {
  const desks = [
    ...Array(10).fill({ type: "individual", status: "available" }),
    ...Array(5).fill({ type: "team", status: "available" }),
  ].map((desk, index) => ({ ...desk, id: index + 1 }));

  const [deskStatus, setDeskStatus] = useState(desks);

  const handleBooking = (id) => {
    const updatedDesks = deskStatus.map((desk) =>
      desk.id === id ? { ...desk, status: "booked" } : desk
    );
    setDeskStatus(updatedDesks);
  };

  return (
    <div className="grid max-w-lg grid-cols-5 gap-4 mx-auto">
      {deskStatus.map((desk) => (
        <div
          key={desk.id}
          className={`p-4 rounded-md text-white font-bold text-center cursor-pointer ${
            desk.status === "booked"
              ? "bg-gray-400 pointer-events-none"
              : desk.type === "individual"
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
          onClick={() => desk.status === "available" && handleBooking(desk.id)}
        >
          {desk.type === "individual" ? "Individual" : "Team"} {desk.id}
        </div>
      ))}
    </div>
  );
};

export default DeskGrid;
