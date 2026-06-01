// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import { CartContext } from "../context/CartContext";

// function OrderOnline() {
//   const { cart, updateQty, removeFromCart, clearCart } =
//     useContext(CartContext);
//   const [paymentMethod, setPaymentMethod] = useState("Debit/Credit");
//   const [note, setNote] = useState("");
//   const navigate = useNavigate();

//   const subtotal = cart.reduce(
//     (acc, item) =>
//       acc + item.qty * parseInt(item.price.replace(/\D/g, "")),
//     0
//   );
//   const serviceFee = cart.length > 0 ? 4000 : 0;
//   const tax = Math.round((subtotal + serviceFee) * 0.1);
//   const total = subtotal + serviceFee + tax;


//   const handlePlaceOrder = () => {
//     if (cart.length === 0) {
//       alert("Your cart is still empty.");
//       return;
//     }

//    navigate("/receipt", {
//       state: { cart, paymentMethod, note, subtotal, serviceFee, tax, total },
//     });


//     clearCart();
//   };

//   return (
//     <main className="min-h-screen w-full bg-[#F5F0EB]">
//       <Navbar cartCount={cart.length} />

//       <section className="w-full max-w-[1180px] mx-auto px-8 md:px-16 lg:px-20 py-14">
//         {/* Header */}
//         <div className="mb-10">
//           <h1 className="text-3xl md:text-4xl font-bold text-[#3E2C24]">
//             Complete Your Order
//           </h1>
//           <p className="mt-2 font-serif text-[#6D5C53] italic">
//             Review your selected menu, adjust your order, and complete your
//             purchase with ease.
//           </p>
//         </div>

//         {cart.length === 0 ? (
//           <div className="bg-white rounded-2xl shadow-md p-10 text-center">
//             <h2 className="text-2xl font-bold text-[#3E2C24] mb-3">
//               Your cart is empty.
//             </h2>
//             <p className="text-[#6D5C53] mb-6">
//               Please choose your favorite menu first before placing an order.
//             </p>

//             <Link
//               to="/menu"
//               className="inline-block bg-[#4a2d27] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6b4036] transition"
//             >
//               Choose Menu
//             </Link>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-10">
//             {/* Left: Order Items */}
//             <div className="bg-[#FFF8F0] rounded-2xl shadow-md p-8">
//               <h2 className="text-xl font-bold text-[#3E2C24] mb-5">
//                 Order Items
//               </h2>

//               <div className="border border-[#d7cfc5] rounded-sm p-4 min-h-[250px]">
//                 {cart.map((item) => (
//                   <div
//                     key={item.name}
//                     className="flex items-center justify-between gap-4 border-b border-[#ded4c8] last:border-b-0 py-4"
//                   >
//                     {/* Gambar kecil di samping nama menu */}
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 object-cover rounded-lg"
//                   />
//                     <div>
//                       <h3 className="font-semibold text-[#3E2C24]">
//                         {item.name}
//                       </h3>
//                       <p className="text-[#6D5C53] text-sm">{item.price}</p>
//                     </div>

//                     <div className="flex items-center gap-3">
//                       <button
//                         onClick={() => updateQty(item.name, item.qty - 1)}
//                         className="w-7 h-7 border border-[#6D5C53] text-[#3E2C24] flex items-center justify-center hover:bg-[#eaded3] transition"
//                       >
//                         -
//                       </button>

//                       <span className="w-5 text-center font-semibold">
//                         {item.qty}
//                       </span>

//                       <button
//                         onClick={() => updateQty(item.name, item.qty + 1)}
//                         className="w-7 h-7 border border-[#6D5C53] text-[#3E2C24] flex items-center justify-center hover:bg-[#eaded3] transition"
//                       >
//                         +
//                       </button>

//                       <button
//                         onClick={() => removeFromCart(item.name)}
//                         className="ml-3 text-red-600 font-bold hover:text-red-800 transition"
//                       >
//                         🗑
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <textarea
//                 value={note}
//                 onChange={(e) => setNote(e.target.value)}
//                 placeholder="Add notes for your order..."
//                 className="w-full mt-8 border border-[#d7cfc5] bg-transparent px-4 py-4 outline-none resize-none text-[#3E2C24]"
//                 rows="3"
//               />

//               <Link
//                 to="/menu"
//                 className="inline-block mt-5 text-[#4a2d27] font-semibold hover:underline"
//               >
//                 + Add More Menu
//               </Link>
//             </div>

//             {/* Right: Order Summary */}
//            {cart.length > 0 && (
//           <div className="w-full lg:w-[400px] bg-[#FFF8F0] p-6 rounded-xl shadow-md flex flex-col gap-4">
//             <h2 className="text-xl font-bold text-[#3E2C24] mb-3">
//               Order Summary
//             </h2>

//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>Rp {subtotal.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Service Fee</span>
//               <span>Rp {serviceFee.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>PPN 10%</span>
//               <span>Rp {tax.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between font-bold text-lg mt-2">
//               <span>Total</span>
//               <span>Rp {total.toLocaleString()}</span>
//             </div>

              
//              <div className="mt-4 flex flex-col gap-2">
//               <label className="font-semibold">Payment Method:</label>
//               {["Debit/Credit", "E-Wallet", "Cash"].map((method) => (
//                 <button
//                   key={method}
//                   onClick={() => setPaymentMethod(method)}
//                   className={`w-full text-left px-4 py-3 mb-1 border rounded-lg transition ${
//                     paymentMethod === method
//                       ? "bg-[#6b463c] text-white border-[#6b463c]"
//                       : "bg-transparent text-[#3E2C24] border-[#ded4c8] hover:bg-[#eaded3]"
//                   }`}
//                 >
//                   {method}
//                 </button>
//               ))}
//             </div>

//             <button
//               onClick={handlePlaceOrder}
//               className="mt-4 w-full bg-[#4a2d27] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
//             >
//               PLACE ORDER
//             </button>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }

// export default OrderOnline;

// src/pages/OrderOnline.jsx
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

function OrderOnline() {
  const { cart, updateQty, removeFromCart, clearCart } =
    useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("Debit/Credit");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.qty * parseInt(item.price.replace(/\D/g, "")),
    0
  );
  const serviceFee = cart.length > 0 ? 4000 : 0;
  const tax = Math.round((subtotal + serviceFee) * 0.1);
  const total = subtotal + serviceFee + tax;

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is still empty.");
      return;
    }

    navigate("/receipt", {
      state: { cart, paymentMethod, note, subtotal, serviceFee, tax, total },
    });

    clearCart();
  };

  return (
    <main className="min-h-screen w-full bg-[#F5F0EB]">
      <Navbar cartCount={cart.length} />

      <section className="w-full max-w-[1180px] mx-auto px-8 md:px-16 lg:px-20 py-14">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3E2C24]">
            Complete Your Order
          </h1>
          <p className="mt-2 font-serif text-[#6D5C53] italic">
            Review your selected menu, adjust your order, and complete your
            purchase with ease.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">
            <h2 className="text-2xl font-bold text-[#3E2C24] mb-3">
              Your cart is empty.
            </h2>
            <p className="text-[#6D5C53] mb-6">
              Please choose your favorite menu first before placing an order.
            </p>

            <Link
              to="/menu"
              className="inline-block bg-[#4a2d27] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6b4036] transition"
            >
              Choose Menu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-10">
            {/* Left: Order Items */}
            <div className="bg-[#FFF8F0] rounded-2xl shadow-md p-8">
              <h2 className="text-xl font-bold text-[#3E2C24] mb-5">
                Order Items
              </h2>

              <div className="border border-[#d7cfc5] rounded-sm p-4 min-h-[250px]">
                {cart.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 border-b border-[#ded4c8] last:border-b-0 py-4"
                  >
                    {/* Gambar kecil di samping nama menu */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-[#3E2C24]">
                        {item.name}
                      </h3>
                      <p className="text-[#6D5C53] text-sm">{item.price}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQty(item.name, item.qty - 1)}
                        className="w-7 h-7 border border-[#6D5C53] text-[#3E2C24] flex items-center justify-center hover:bg-[#eaded3] transition"
                      >
                        -
                      </button>

                      <span className="w-5 text-center font-semibold">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => updateQty(item.name, item.qty + 1)}
                        className="w-7 h-7 border border-[#6D5C53] text-[#3E2C24] flex items-center justify-center hover:bg-[#eaded3] transition"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="ml-3 text-red-600 font-bold hover:text-red-800 transition"
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add notes for your order..."
                className="w-full mt-8 border border-[#d7cfc5] bg-transparent px-4 py-4 outline-none resize-none text-[#3E2C24]"
                rows={3}
              />

              <Link
                to="/menu"
                className="inline-block mt-5 text-[#4a2d27] font-semibold hover:underline"
              >
                + Add More Menu
              </Link>
            </div>

            {/* Right: Order Summary */}
            <div className="w-full lg:w-[400px] bg-[#FFF8F0] p-6 rounded-xl shadow-md flex flex-col gap-4">
              <h2 className="text-xl font-bold text-[#3E2C24] mb-3">
                Order Summary
              </h2>

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rp {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Service Fee</span>
                <span>Rp {serviceFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>PPN 10%</span>
                <span>Rp {tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-2">
                <span>Total</span>
                <span>Rp {total.toLocaleString()}</span>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <label className="font-semibold">Payment Method:</label>
                {["Debit/Credit", "E-Wallet", "Cash"].map((method) => (
                  <button
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    className={`w-full text-left px-4 py-3 mb-1 border rounded-lg transition ${
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
                onClick={handlePlaceOrder}
                className="mt-4 w-full bg-[#4a2d27] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                PLACE ORDER
              </button>
              
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default OrderOnline;