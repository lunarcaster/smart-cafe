

import { useLocation, Link } from "react-router-dom";
import favicon from "../assets/favicon-cafe.png";

function OrderReceipt() {
  const location = useLocation();
  const { cart, paymentMethod, note, subtotal, serviceFee, tax, total } =
    location.state;

  const paymentMessage =
  paymentMethod === "E-Wallet"
    ? "Your payment will be processed immediately."
    : "Please proceed to the cashier to complete your payment.";

// const generateOrderID = () => {
//   const timestamp = Date.now(); // milidetik sejak 1970
//   const random = Math.floor(Math.random() * 1000); // 0-999
//   return `${timestamp}-${random}`;
// };
// const orderID = generateOrderID();
const generateOrderID = () => {
  return Math.floor(100000 + Math.random() * 900000); // 100000 - 999999
};

// Contoh penggunaan
const orderID = generateOrderID();
console.log(orderID); // misal: 483291
// Contoh hasil
// "1685612345678-482"

const now = new Date();
const orderDate = now.toLocaleString("en-US", {
  weekday: "short", // Mon, Tue...
  year: "numeric",
  month: "short",   // Jan, Feb...
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});

  return (
    <div className="min-h-screen bg-[#F5F0EB] p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">Order Receipt</h1>
      
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-lg border border-gray-300">
        <div className="flex justify-center mb-4">
            <img
                src={favicon}
                alt="La Lunarcaster Cafe"
                className="w-20 md:w-28 lg:w-32 object-contain"
            />
            </div>
        <h2 className="great-vibes-regular text-2xl font-bold mb-2 text-center">La Lunarcaster Cafe</h2>
         {/* Pesan pembayaran hanya sekali */}
         <p className="mb-6 text-[#3E2C24] italic text-center text-sm">{paymentMessage}</p>
         <hr className="my-2" />

         <p className="fira-code-regular mb-2 text-sm text-gray-500">Date: {orderDate}</p>
         <p className="fira-code-regular mb-2 text-sm text-gray-500">Order ID: {orderID}</p>
         <br />
          <p className="fira-code-regular font-bold">Order Details</p>
          <hr className="my-2" />

        {cart.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between mb-3 text-[#3E2C24] fira-code-regular"
          > 
            <span>
              {item.name} x {item.qty}
            </span>
            <span>
              Rp {(parseInt(item.price.replace(/\D/g, "")) * item.qty).toLocaleString()}
            </span>
          </div>
        ))}

        {note && (
          <p className="text-sm text-gray-500 mb-2">Notes: {note}</p>
        )}

        <hr className="my-2" />
        <div className="flex justify-between fira-code-regular">
          <span>Subtotal</span>
          <span>Rp {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between fira-code-regular">
          <span>Service Fee</span>
          <span>Rp {serviceFee.toLocaleString()}</span>
        </div>
        <div className="flex justify-between fira-code-regular">
          <span>PPN 10%</span>
          <span>Rp {tax.toLocaleString()}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold text-lg fira-code-regular">
          <span>Total</span>
          <span>Rp {total.toLocaleString()}</span>
        </div>

        <p className="mt-4 fira-code-regular">Payment Method: {paymentMethod}</p>

        <Link
          to="/menu"
          className="mt-6 block text-center bg-[#4a2d27] text-white py-2 rounded-lg font-semibold"
        >
          Back to Menu
        </Link>
      </div>
    </div>
  );
}

export default OrderReceipt;

