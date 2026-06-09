
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ReservationDetail() {
  const [paymentMethod, setPaymentMethod] = useState("Debit/Credit");

  const savedReservation = JSON.parse(
    sessionStorage.getItem("reservationData")
  );

  const reservation = savedReservation || {
    name: "-",
    date: "-",
    time: "-",
    guests: 0,
    area: "-",
    table: "-",
    availability: "-",
  };

  const dpPerTwoPeople = 100000;
  const dpTotal =
    Math.ceil(Number(reservation.guests) / 2) * dpPerTwoPeople;

  const handleConfirmReservation = () => {
    alert(
      `Reservation confirmed!\nName: ${reservation.name}\nPayment Method: ${paymentMethod}\nDP Total: Rp ${dpTotal.toLocaleString(
        "id-ID"
      )}`
    );
  };

  return (
    <main className="min-h-screen w-full bg-[#F5F0EB]">
      <Navbar />

      <section className="w-full max-w-[1100px] mx-auto px-8 md:px-16 lg:px-20 py-14">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3E2C24]">
            Reservation Detail
          </h1>
          <p className="mt-2 font-serif text-[#6D5C53] italic">
            Review your table reservation and complete the down payment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10">
          {/* Left: Reservation Info */}
          <div className="bg-[#FFF8F0] rounded-2xl shadow-md p-8">
            <h2 className="text-xl font-bold text-[#3E2C24] mb-6">
              Reservation Summary
            </h2>

            <div className="border border-[#d7cfc5] rounded-sm p-5 space-y-5">
              <div className="flex justify-between border-b border-[#ded4c8] pb-3">
                <span className="font-semibold">Name</span>
                <span>{reservation.name || "-"}</span>
              </div>

              <div className="flex justify-between border-b border-[#ded4c8] pb-3">
                <span className="font-semibold">Date</span>
                <span>{reservation.date || "-"}</span>
              </div>

              <div className="flex justify-between border-b border-[#ded4c8] pb-3">
                <span className="font-semibold">Time</span>
                <span>{reservation.time || "-"}</span>
              </div>

              <div className="flex justify-between border-b border-[#ded4c8] pb-3">
                <span className="font-semibold">Guests</span>
                <span>{reservation.guests || 0} People</span>
              </div>

              <div className="flex justify-between border-b border-[#ded4c8] pb-3">
                <span className="font-semibold">Area</span>
                <span>{reservation.area || "-"}</span>
              </div>

              <div className="flex justify-between border-b border-[#ded4c8] pb-3">
                <span className="font-semibold">Table</span>
                <span>{reservation.table || "-"}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Availability</span>
                <span className="text-green-700 font-semibold">
                  ● {reservation.availability || "-"}
                </span>
              </div>
            </div>

            <Link
              to="/reserve"
              className="inline-block mt-6 text-[#4a2d27] font-semibold hover:underline"
            >
              Edit Reservation
            </Link>
          </div>

          {/* Right: Payment Detail */}
          <div className="bg-[#FFF8F0] rounded-2xl shadow-md p-8 h-fit">
            <h2 className="text-xl font-bold text-[#3E2C24] mb-6">
              Down Payment
            </h2>

            <div className="border-t border-[#ded4c8] pt-5 space-y-4">
              <div className="flex justify-between">
                <span>DP Rate</span>
                <span>Rp100.000 / 2 People</span>
              </div>

              <div className="flex justify-between">
                <span>Total Guests</span>
                <span>{reservation.guests || 0} People</span>
              </div>

              <div className="border-t border-[#ded4c8] pt-4 flex justify-between font-bold text-lg">
                <span>DP Total</span>
                <span>Rp{dpTotal.toLocaleString("id-ID")}</span>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-[#3E2C24] mb-3">
                Payment Method
              </p>

              {["Debit/Credit", "E-Wallet", "Cash"].map((method) => (
                <button
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`w-full text-left px-4 py-3 mb-3 border transition ${
                    paymentMethod === method
                      ? "bg-[#6b463c] text-white border-[#6b463c]"
                      : "bg-transparent text-[#3E2C24] border-[#ded4c8] hover:bg-[#eaded3]"
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>

            <button
              onClick={handleConfirmReservation}
              className="w-full mt-6 bg-[#4a2d27] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              CONFIRM DOWN PAYMENT
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ReservationDetail;