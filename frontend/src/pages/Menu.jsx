// src/pages/Menu.jsx
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { menuItem, categories } from "../data/menuItem";
import { CartContext } from "../context/CartContext";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart, cart } = useContext(CartContext); // <-- pakai "cart" sesuai CartContext

  const filteredMenu =
    activeCategory === "All"
      ? menuItem
      : menuItem.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-[#4b3934] via-[#9b8f84] to-[#ede7dc]">
      <Navbar cartCount={cart.length} />

      <section className="w-full max-w-[1360px] mx-auto px-8 md:px-20 lg:px-28 py-20">
        {/* Title */}
        <div className="mb-10 text-center lg:text-left fade-down">
          <h2 className="great-vibes-regular text-5xl md:text-6xl text-[#d7c689]">
            Our Digital Menu
          </h2>
          <p className="mt-3 font-serif text-lg text-white/70">
            Experience a curated selection of coffee, meals, and desserts.
          </p>
        </div>

        {/* Filter kategori */}
        <div className="flex flex-wrap gap-4 mb-12 text-white/80 font-semibold fade-down-delay">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`transition ${
                activeCategory === cat
                  ? "text-[#d7c689] font-bold border-b-2 border-[#d7c689]"
                  : "hover:text-[#d7c689]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 fade-down-slow">
          {filteredMenu.map((item) => (
            <div
              key={item.name}
              className="bg-[#FFF8F0] rounded-2xl overflow-hidden p-5 shadow-lg flex flex-col items-center min-h-[450px]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[250px] object-cover mb-4"
              />
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-[#6D5C53] mt-1">{item.price}</p>
              <p className="font-serif text-sm mt-2 text-center text-[#6D5C53]">
                {item.desc}
              </p>
              <div className="flex gap-2 mt-4 w-full justify-center">
                <button
                  onClick={() => addToCart(item)}
                  className="bg-[#a66f5d] text-white px-6 py-2 rounded-lg shadow hover:bg-[#8f5f50] transition"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lanjutkan Pesanan */}
        {cart.length > 0 && (
          <div className="mt-6 flex justify-end">
            <Link
              to="/order"
              className="bg-[#4a2d27] text-white px-6 py-3 rounded-lg font-semibold"
            >
              Lanjutkan Pesanan ({cart.length})
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default Menu;