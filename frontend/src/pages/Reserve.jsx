
// src/pages/Reserve.jsx
import Navbar from "../components/Navbar";
import { useState } from "react";
import reserve from "../assets/reserve-image.png";
import { useNavigate } from "react-router-dom";

function Reserve() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [area, setArea] = useState("Semi-Outdoor");
  const [table, setTable] = useState("");
  const [availability] = useState(true);

  const handleConfirmReservation = () => {
    const reservationData = {
      name,
      date,
      time,
      guests,
      area,
      table,
      availability: availability ? "Available" : "Booked",
    };

    sessionStorage.setItem("reservationData", JSON.stringify(reservationData));

    const loggedInUser = localStorage.getItem("user");

   if (loggedInUser) {
    navigate("/reservation-detail");
  } else {
    sessionStorage.setItem("pendingReservationLogin", "true");
    navigate("/signin");
  }
};

  return (
    <main className="min-h-screen bg-[#F5F0EB]">
      <Navbar />

      <section className="w-full max-w-[1360px] mx-auto px-8 md:px-20 lg:px-28 py-20 flex flex-col lg:flex-row items-center gap-10">
        {/* Formulir Reservasi */}
        <div className="bg-[#FFF8F0] p-8 rounded-[2rem] shadow-lg flex-1">
          <h1 className="text-3xl font-bold mb-2">Reserve Your Table</h1>

          <p className="italic text-[#3E2C24] mb-6">
            Book your favorite spot and enjoy a warm semi-outdoor dining
            experience at La Lunarcaster Cafe.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <label className="flex flex-col">
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded-lg"
                placeholder="Insert your name"
              />
            </label>
            </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <label className="flex flex-col">
              Date
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border p-2 rounded-lg"
              />
            </label>

            <label className="flex flex-col">
              Time
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="border p-2 rounded-lg"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <label className="flex flex-col">
              Guests
              <input
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="border p-2 rounded-lg"
              />
            </label>

            <label className="flex flex-col">
              Area
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="border p-2 rounded-lg"
              >
                <option>Semi-Outdoor</option>
                <option>Indoor</option>
                <option>Outdoor</option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <label className="flex flex-col">
              Table
              <input
                type="text"
                value={table}
                onChange={(e) => setTable(e.target.value)}
                className="border p-2 rounded-lg"
                placeholder="Example: Table A3"
              />
            </label>

            <label className="flex flex-col">
              Availability
              <button
                type="button"
                className={`p-2 rounded-lg font-semibold ${
                  availability ? "bg-green-400" : "bg-red-400"
                }`}
              >
                {availability ? "Available" : "Booked"}
              </button>
            </label>
          </div>

          <button
            onClick={handleConfirmReservation}
            className="w-full bg-[#4a2d27] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            CONFIRM RESERVATION
          </button>
        </div>

        {/* Gambar */}
        <div className="flex-1">
          <img
            src={reserve}
            alt="Cafe Ambience"
            className="rounded-[2rem] object-cover w-full h-full shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}

export default Reserve;