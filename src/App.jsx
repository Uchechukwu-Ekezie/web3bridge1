import { useState } from "react";
import DeskGrid from "./components/DeskGrid";
import BookingForm from "./components/BookingForm";

const App = () => {
  const [revenue, setRevenue] = useState(0);

  const handleBooking = (total) => {
    setRevenue((prev) => prev + total);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-5 bg-gray-100">
      <h1 className="mb-5 text-2xl font-bold text-blue-600">
        Co-working Space Booking System
      </h1>
      <DeskGrid />
      <BookingForm onConfirm={handleBooking} />
      <p className="mt-5 text-lg font-semibold text-gray-700">
        Total Revenue: <span className="text-green-500">₦{revenue}</span>
      </p>
    </div>
  );
};

export default App;
