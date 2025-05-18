// src/components/GenreMovieList.jsx
import React from "react";
import GenreList from "../constant/GenreList";

// Static movie lists for each genre
const actionMovies = [
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
];

const adventureMovies = [
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
];

const comedyMovies = [
  {
    id: 1,
    image:
      "https://th.bing.com/th/id/OIP.QcRZkkcGkYpOS1pTa8X_EQHaEK?w=269&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
    title: "piku",
  },
  {
    id: 2,
    image:
      "https://th.bing.com/th/id/OIP.Pxpzoa_k7uxLcv_8FxpqTwHaEK?w=302&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
    title: "chillar party",
  },
  {
    id: 3,
    image:
      "https://th.bing.com/th/id/OIP.rvVWL0iwXSSgbrHY4Tof7AHaEK?w=329&h=184&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
    title: "3 idiots",
  },
  {
    id: 4,
    image:
      "https://th.bing.com/th/id/OIP.f3CFeoH2PEfjiWbqYZZIRQHaEK?w=275&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.4&pid=1.7&rm=3",
    title: "Golmaal returns",
  },
  {
    id: 5,
    image:
      "https://ts4.mm.bing.net/th?id=OIP.pG6gorrpiGpN4KNjAbvHmAHaEK&pid=15.1",
    title: "Phir hera pheri",
  },
];

const animationMovies = [
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
];

const genreMovieMap = {
  Action: actionMovies,
  Adventure: adventureMovies,
  Comedy: comedyMovies,
  Animation: animationMovies,
};

function GenreMovieList({ filterGenres = null }) {
  const genresToDisplay =
    filterGenres || GenreList.genere.filter((_, index) => index < 4);

  return (
    <div>
      {genresToDisplay.map((item) => (
        <div key={item.id || item.name} className="p-8 px-8 md:px-16">
          <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
              {genreMovieMap[item.name].map((movie) => (
                <div
                  key={movie.id}
                  className="flex-shrink-0 w-[280px] h-[150px] rounded-lg overflow-hidden snap-start"
                >
                  <img
                    src={movie.image}
                    alt={`${movie.title || item.name} Movie ${movie.id}`}
                    className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-150 ease-in cursor-pointer"
                  />
                  <p className="text-white text-sm mt-2 truncate">
                    {movie.title || "Unknown Title"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GenreMovieList;
