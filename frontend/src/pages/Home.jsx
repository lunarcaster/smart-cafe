import Navbar from "../components/Navbar";
import heroCafe from "../assets/terrace.png";

function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-[#4b3934] via-[#9b8f84] to-[#ede7dc]">
      <Navbar />
        <section className="w-full max-w-[1360px] mx-auto min-h-[calc(100vh-110px)] px-8 md:px-20 lg:px-28 flex items-center">
       

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 w-full">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h2 className="great-vibes-regular text-[#d7c689] text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-md">
              Warm Moments, <br />
              Smarter Dining
            </h2>

            <p className="mt-8 max-w-md mx-auto lg:mx-0 text-white/70 text-base md:text-lg leading-relaxed font-serif">
              Experience a cozy semi-outdoor ambiance with digital menu and
              easy table reservations.
            </p>

            <div className="mt-10">
              <a
                href="/reserve"
                className="inline-block bg-[#a66f5d] text-white font-serif text-lg px-12 py-5 rounded-xl shadow-lg hover:bg-[#8f5f50] transition"
              >
                RESERVE NOW
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[630px] h-[300px] md:h-[380px] rounded-[26px] overflow-hidden shadow-2xl">
              <img
                src={heroCafe}
                alt="Cafe Ambience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;