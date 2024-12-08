import  { useState } from "react";
import DeskLayout from "./components/DeskLayout";
import BookingForm from "./components/BookingForm";
import Summary from "./components/Summarj";

function App() {
  const [desks, setDesks] = useState(
    Array(15).fill(null).map((_, i) => ({
      id: i + 1,
      type: i < 10 ? "individual" : "team",
      booked: false,
    }))
  );

  const [summary, setSummary] = useState(null);
  const [revenue, setRevenue] = useState({ basic: 0, premium: 0, executive: 0, team: 0 });

  const handleBooking = (deskId, hours, membershipType) => {
    const updatedDesks = desks.map((desk) =>
      desk.id === deskId ? { ...desk, booked: true } : desk
    );

    const desk = desks.find((desk) => desk.id === deskId);
    let pricePerHour = desk.type === "team" ? 25 : membershipType === "basic" ? 10 : membershipType === "premium" ? 15 : 20;
    let total = hours * pricePerHour;

    if (hours > 3) {
      total *= 0.9; // Apply 10% discount
    }

    setRevenue((prev) => ({
      ...prev,
      [desk.type === "team" ? "team" : membershipType]: prev[desk.type === "team" ? "team" : membershipType] + total,
    }));

    setDesks(updatedDesks);
    setSummary({ deskId, hours, total });
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <header className="py-4 text-center text-white bg-blue-600">
        <h1 className="text-2xl font-bold">Co-Working Space Booking System</h1>
      </header>
      <DeskLayout desks={desks} />
      <BookingForm desks={desks} onBook={handleBooking} />
      <Summary summary={summary} revenue={revenue} />
    </div>
  );
}

export default App;
