// src/pages/Contact.jsx
import Navbar from "../components/Navbar";
import terraceImg from "../assets/terrace.png";
import signInImg from "../assets/signin-cafe.png";
import reserveImg from "../assets/reserve-image.png";
import indoor from "../assets/indoor.png";
import outdoor from "../assets/outdoor.png";

function Contact() {
  const gallery = [
    { name: "Indoor 1", image: signInImg },
    { name: "Indoor 2", image: indoor },
    { name: "Outdoor", image: outdoor },
    { name: "Semi-Outdoor", image: reserveImg },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-[#4b3934] via-[#9b8f84] to-[#ede7dc]">
      <Navbar />

      <section className="w-full max-w-[1360px] mx-auto px-8 md:px-20 lg:px-28 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#FFF8F0] mb-3">
              Visit La Lunarcaster Cafe
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
              Come and enjoy warm moments at our cozy cafe. Find our contact
              details and location here.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white/90">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#FFF8F0]">
                    Address
                  </h3>
                  <p className="leading-relaxed">
                    Jl. Senja No. 12, Bandung, Indonesia
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#FFF8F0]">
                    Phone
                  </h3>
                  <p>+62 812-3456-7890</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#FFF8F0]">
                    Email
                  </h3>
                  <p className="underline underline-offset-4">
                    hello@lalunarcastercafe.com
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#FFF8F0]">
                    Opening Hours
                  </h3>
                  <p>Mon - Fri: 10:00 AM - 10:00 PM</p>
                  <p>Sat - Sun: 09:00 AM - 11:00 PM</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#FFF8F0]">
                    Instagram
                  </h3>
                  <p>@lalunarcastercafe.id</p>
                </div>

                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#FFF8F0] text-[#4a2d27] px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-[#f0e4d8] transition"
                >
                  Get Direction &gt;&gt;
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={terraceImg}
              alt="La Lunarcaster Cafe"
              className="w-full max-w-[430px] h-[300px] object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {gallery.map((item) => (
            <div key={item.name} className="text-center">
              <div className="w-full h-[150px] overflow-hidden rounded-sm shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <p className="mt-4 text-[#FFF8F0] font-serif text-lg">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Contact;