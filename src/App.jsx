// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer"; // Import the Footer component

function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const searchGenres = [
    {
      name: "Action",
      movies: [
        {
          id: 1,
          image:
            "https://th.bing.com/th/id/OIP.ZphR6A2AEYaJNUxO12QKcAHaEK?w=288&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Boss",
        },
        {
          id: 2,
          image:
            "https://th.bing.com/th/id/OIP.6AZT-TSAVUdSxgkA3eYoHAHaEK?w=287&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Gabbar Is Back",
        },
        {
          id: 3,
          image:
            "https://th.bing.com/th/id/OIP.FR41IBVoXTw6HSr3DlWyzAAAAA?w=260&h=170&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Marco",
        },
        {
          id: 4,
          image:
            "https://th.bing.com/th/id/OIP.dam-dv2tPaGRAHASdqt-_AHaHa?w=171&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Dishoom",
        },
        {
          id: 5,
          image:
            "https://th.bing.com/th/id/OIP.eoKi0Q8Q05CvT8pmIL3-GwHaFl?w=239&h=181&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Spiderman",
        },
      ],
    },
    {
      name: "Adventure",
      movies: [
        {
          id: 1,
          image:
            "https://th.bing.com/th/id/OIP.zU_x1O_v7Ty4fr9Z15sT7wHaE8?w=249&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Zindagi na milegi dobara",
        },
        {
          id: 2,
          image:
            "https://th.bing.com/th/id/OIP.1D9wlXlZoyydbjrpPi_P5wHaD2?w=310&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Thugs of Hindostan",
        },
        {
          id: 3,
          image:
            "https://th.bing.com/th/id/OIP.QcRZkkcGkYpOS1pTa8X_EQHaEK?w=269&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "piku",
        },
        {
          id: 4,
          image:
            "https://th.bing.com/th/id/OIP.Lhx1CYpi26BiRv8bLYnWHAHaFj?w=235&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Jagga jasoos",
        },
        {
          id: 5,
          image:
            "https://th.bing.com/th/id/OIP.Pxpzoa_k7uxLcv_8FxpqTwHaEK?w=302&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "chillar party",
        },
      ],
    },
    {
      name: "Animation",
      movies: [
        {
          id: 1,
          image:
            "https://th.bing.com/th/id/OIP.YdTLz58M4UWDfCeATrTPRgHaHa?w=174&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Hanuman",
        },
        {
          id: 2,
          image:
            "https://th.bing.com/th/id/OIP.91MTJ7UGioTqBHev-V3r1wHaCx?w=322&h=131&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Roadside Romeo",
        },
        {
          id: 3,
          image:
            "https://th.bing.com/th/id/OIP.39JHGAI9Lf6DOA4j2efeWAHaEK?w=271&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Motu patlu: King of kings",
        },
        {
          id: 4,
          image:
            "https://th.bing.com/th/id/OIP.S60k0PTXE9fqVQgINUFkWwHaEK?w=307&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Choota Bheem",
        },
        {
          id: 5,
          image:
            "https://th.bing.com/th/id/OIP.zrVtfLqVVPniD86WWvEaGQHaEJ?w=270&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "chhota bheem: the throne of bali",
        },
      ],
    },
    {
      name: "Love Action",
      movies: [
        {
          id: 1,
          image:
            "https://ts4.mm.bing.net/th?id=OIP.XCZg5wp8AxpEn6PZx8a_hgHaD4&pid=15.1",
          title: "Arjun Reddy",
        },
        {
          id: 2,
          image:
            "https://th.bing.com/th/id/OIP.VfGWBitdszegb-MkEv_xBQHaEK?w=293&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Shiddat",
        },
        {
          id: 3,
          image:
            "https://ts2.mm.bing.net/th?id=OIP.VxYteQlMlE-FuX2zO-ORpAHaEK&pid=15.1",
          title: "Hridayam",
        },
        {
          id: 4,
          image:
            "https://th.bing.com/th/id/OIP.9NWTMLKibA8Iug4vbwHyzgHaEo?w=272&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "RRR",
        },
        {
          id: 5,
          image:
            "https://th.bing.com/th/id/OIP.dmCyymiljx1--GqVHAHQPAHaEK?w=294&h=183&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Devara",
        },
      ],
    },
    {
      name: "Korean Dramas",
      movies: [
        {
          id: 1,
          image: "https://th.bing.com/th/id/OIP.O8c8txP_Ndb1a4uyzuQlsAHaEM?w=270&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "My Deskmate"
        },
        {
          id: 2,
          image: "https://th.bing.com/th/id/OIP.6jpR6hwLpwfDJzZ0va0jhAHaEK?w=301&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "GenZ"
        },
        {
          id: 3,
          image: "https://th.bing.com/th/id/OIP._KqAb4kvnQC2xYEq9sJuWgHaEK?w=324&h=182&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Call It Love"
        },
        {
          id: 4,
          image: "https://th.bing.com/th/id/OIP.Q2TGBt22rzsMdhmaGPAEiwHaFP?w=248&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Dr. Romantic"
        },
        {
          id: 5,
          image: "https://th.bing.com/th/id/OIP.BhsuBGgXmyhlg4IrM4oiZgHaEK?w=300&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
          title: "Red Swam"
        },
      ],
    },
  ];

  const filteredResults = searchQuery
    ? searchGenres
        .map((genre) => ({
          ...genre,
          movies: genre.movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((genre) => genre.movies.length > 0)
    : searchGenres;

  return (
    <div className="bg-[#1a1d29] text-white">
      <div className="p-8 px-8 md:px-16">
        <h2 className="text-[20px] font-bold mb-4">Search Movies & Series</h2>
        <input
          type="text"
          placeholder="Enter movie or series name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>
      {filteredResults.length > 0 ? (
        <div>
          {filteredResults.map((genre) => (
            <div key={genre.name} className="p-8 px-8 md:px-16">
              <h2 className="text-[20px] text-white font-bold">{genre.name}</h2>
              <div className="relative">
                <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                  {genre.movies.map((movie) => (
                    <div
                      key={movie.id}
                      className="flex-shrink-0 w-[280px] h-[150px] rounded-lg overflow-hidden snap-start"
                    >
                      <img
                        src={movie.image}
                        alt={`${movie.title}`}
                        className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-150 ease-in cursor-pointer"
                      />
                      <p className="text-white text-sm mt-2 truncate">
                        {movie.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 px-8 md:px-16">
          <p className="text-gray-400">No movies or series found.</p>
        </div>
      )}
      <Footer /> {/* Add Footer */}
    </div>
  );
}

function WatchList() {
  const continueWatchingMovies = [
    {
      id: 1,
      image:
        "https://th.bing.com/th/id/OIP.6AZT-TSAVUdSxgkA3eYoHAHaEK?w=287&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Gabbar Is Back",
    },
    {
      id: 2,
      image:
        "https://th.bing.com/th/id/OIP.Lhx1CYpi26BiRv8bLYnWHAHaFj?w=235&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Jagga Jasoos",
    },
    {
      id: 3,
      image:
        "https://th.bing.com/th/id/OIP.91MTJ7UGioTqBHev-V3r1wHaCx?w=322&h=131&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Roadside Romeo",
    },
  ];

  const watchlistMovies = [
    {
      id: 1,
      image:
        "https://ts4.mm.bing.net/th?id=OIP.XCZg5wp8AxpEn6PZx8a_hgHaD4&pid=15.1",
      title: "Arjun Reddy",
    },
    {
      id: 2,
      image:
        "https://th.bing.com/th/id/OIP.VfGWBitdszegb-MkEv_xBQHaEK?w=293&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Shiddat",
    },
    {
      id: 3,
      image:
        "https://ts2.mm.bing.net/th?id=OIP.VxYteQlMlE-FuX2zO-ORpAHaEK&pid=15.1",
      title: "Hridayam",
    },
    {
      id: 4,
      image:
        "https://th.bing.com/th/id/OIP.9NWTMLKibA8Iug4vbwHyzgHaEo?w=272&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "RRR",
    },
    {
      id: 5,
      image:
        "https://th.bing.com/th/id/OIP.dmCyymiljx1--GqVHAHQPAHaEK?w=294&h=183&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Devara",
    },
  ];

  const recommendedMovies = [
    {
      id: 1,
      image:
        "https://th.bing.com/th/id/OIP.zrVtfLqVVPniD86WWvEaGQHaEJ?w=270&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "chhota bheem: the throne of bali",
    },
    {
      id: 2,
      image:
        "https://th.bing.com/th/id/OIP.YdTLz58M4UWDfCeATrTPRgHaHa?w=174&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Hanuman",
    },
    {
      id: 3,
      image:
        "https://th.bing.com/th/id/OIP.f3CFeoH2PEfjiWbqYZZIRQHaEK?w=275&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Golmaal returns",
    },
    {
      id: 4,
      image:
        "https://th.bing.com/th/id/OIP.39JHGAI9Lf6DOA4j2efeWAHaEK?w=271&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Motu patlu: King of kings",
    },
    {
      id: 5,
      image:
        "https://th.bing.com/th/id/OIP.eoKi0Q8Q05CvT8pmIL3-GwHaFl?w=239&h=181&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Spiderman",
    },
  ];

  return (
    <div className="bg-[#1a1d29] text-white">
      {/* Continue Watching Section */}
      <div className="p-8 px-8 md:px-16">
        <h2 className="text-[20px] text-white font-bold">Continue Watching</h2>
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {continueWatchingMovies.map((movie) => (
              <div
                key={movie.id}
                className="flex-shrink-0 w-[280px] h-[150px] rounded-lg overflow-hidden snap-start"
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-150 ease-in cursor-pointer"
                />
                <p className="text-white text-sm mt-2 truncate">
                  {movie.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Watchlist Section */}
      <div className="p-8 px-8 md:px-16">
        <h2 className="text-[20px] text-white font-bold">Watchlist</h2>
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {watchlistMovies.map((movie) => (
              <div
                key={movie.id}
                className="flex-shrink-0 w-[280px] h-[150px] rounded-lg overflow-hidden snap-start"
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-150 ease-in cursor-pointer"
                />
                <p className="text-white text-sm mt-2 truncate">
                  {movie.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Recommendations Section */}
      <div className="p-8 px-8 md:px-16">
        <h2 className="text-[20px] text-white font-bold">Recommendations</h2>
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {recommendedMovies.map((movie) => (
              <div
                key={movie.id}
                className="flex-shrink-0 w-[280px] h-[150px] rounded-lg overflow-hidden snap-start"
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-150 ease-in cursor-pointer"
                />
                <p className="text-white text-sm mt-2 truncate">
                  {movie.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

function Originals() {
  const originalsMovies = [
    {
      id: 1,
      image:
        "https://th.bing.com/th/id/OIP.U-_e8UhqsPouPraBtQTVrQHaEK?w=290&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Da 5 Bloods",
    },
    {
      id: 2,
      image:
        "https://th.bing.com/th/id/OIP.ixBCSFWrrBpMXx9KwjURQAHaDt?w=284&h=175&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Promising Young Women",
    },
    {
      id: 3,
      image:
        "https://th.bing.com/th/id/OIP.PAG-ut6R6Kub98iKPRNwpgHaEK?w=261&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "The Disciple (2020)",
    },
    {
      id: 4,
      image:
        "https://th.bing.com/th/id/OIP.1ghn21I-v-zdOZS6IdlX1QHaEc?w=188&h=113&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Whiplash (2014)",
    },
    {
      id: 5,
      image:
        "https://th.bing.com/th/id/OIP.DfIe_KutC32APRccz0_C0wHaEs?w=188&h=120&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Moonlight (2016)",
    },
  ];

  return (
    <div className="bg-[#1a1d29] text-white">
      <div className="p-8 px-8 md:px-16">
        <h2 className="text-[20px] text-white font-bold">Originals</h2>
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {originalsMovies.map((movie) => (
              <div
                key={movie.id}
                className="flex-shrink-0 w-[280px] h-[150px] rounded-lg overflow-hidden snap-start"
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-150 ease-in cursor-pointer"
                />
                <p className="text-white text-sm mt-2 truncate">
                  {movie.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

function Series() {
  const webSeries = [
    {
      id: 1,
      image:
        "https://th.bing.com/th/id/OIP.3NmYHtdbxCLxL9vEqwnvSwHaEK?w=265&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Panchayat",
    },
    {
      id: 2,
      image:
        "https://th.bing.com/th/id/OIP.6xYLjmutQmwnmTDvr1NJ4wHaEK?w=289&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Kota Factory",
    },
    {
      id: 3,
      image:
        "https://th.bing.com/th/id/OIP.wbahQcTsFBC9mJBbmEiS5AHaEK?w=324&h=182&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Khakee",
    },
    {
      id: 4,
      image:
        "https://th.bing.com/th/id/OIP.h9wCcXchtXhfAu7mpf9wtgHaEK?w=293&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Taaza Khabar",
    },
    {
      id: 5,
      image:
        "https://th.bing.com/th/id/OIP.bzMt54bHuEsedcTut9dM2QHaD4?w=319&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Asurr",
    },
  ];

  const koreanDramas = [
    {
      id: 1,
      image:
        "https://th.bing.com/th/id/OIP.O8c8txP_Ndb1a4uyzuQlsAHaEM?w=270&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "My Deskmate",
    },
    {
      id: 2,
      image:
        "https://th.bing.com/th/id/OIP.6jpR6hwLpwfDJzZ0va0jhAHaEK?w=301&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "GenZ",
    },
    {
      id: 3,
      image:
        "https://th.bing.com/th/id/OIP._KqAb4kvnQC2xYEq9sJuWgHaEK?w=324&h=182&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Call It Love",
    },
    {
      id: 4,
      image:
        "https://th.bing.com/th/id/OIP.Q2TGBt22rzsMdhmaGPAEiwHaFP?w=248&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Dr. Romantic",
    },
    {
      id: 5,
      image:
        "https://th.bing.com/th/id/OIP.BhsuBGgXmyhlg4IrM4oiZgHaEK?w=300&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
      title: "Red Swam",
    },
  ];

  return (
    <div className="bg-[#1a1d29] text-white">
      {/* Web Series Section */}
      <div className="p-8 px-8 md:px-16">
        <h2 className="text-[20px] text-white font-bold">Web Series</h2>
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {webSeries.map((series) => (
              <div
                key={series.id}
                className="flex-shrink-0 w-[280px] h-[150px] rounded-lg overflow-hidden snap-start"
              >
                <img
                  src={series.image}
                  alt={series.title}
                  className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-150 ease-in cursor-pointer"
                />
                <p className="text-white text-sm mt-2 truncate">
                  {series.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Korean Drama Section */}
      <div className="p-8 px-8 md:px-16">
        <h2 className="text-[20px] text-white font-bold">Korean Drama</h2>
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {koreanDramas.map((drama) => (
              <div
                key={drama.id}
                className="flex-shrink-0 w-[280px] h-[150px] rounded-lg overflow-hidden snap-start"
              >
                <img
                  src={drama.image}
                  alt={drama.title}
                  className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-150 ease-in cursor-pointer"
                />
                <p className="text-white text-sm mt-2 truncate">
                  {drama.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

function Movies() {
  return (
    <div className="bg-[#1a1d29] text-white">
      <GenreMovieList />
      <Footer /> {/* Add Footer */}
    </div>
  );
}

function Home() {
  return (
    <div className="bg-[#1a1d29] text-white">
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
      <Footer /> {/* Add Footer */}
    </div>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const openSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const closeDropdown = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    setShowLogin(false);
    setShowSignup(true);
  };

  return (
    <Router>
      <Header onLoginClick={openLogin} onSignupClick={openSignup} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/originals" element={<Originals />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Routes>
      {(showLogin || showSignup) && (
        <div
          className="fixed inset-0 bg-[#1a1d29] bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeDropdown}
        >
          <div
            className="relative bg-[#2a2d3a] p-6 rounded-lg w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeDropdown}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            {showLogin && (
              <div onClick={handleSignupClick}>
                <Login />
              </div>
            )}
            {showSignup && (
              <div onClick={handleLoginClick}>
                <Signup />
              </div>
            )}
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
