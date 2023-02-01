import Image from "next/image";
import Movie from "./Movie";

//when u should use "useclient?" when u need to use onclick or onhover or something like that

export default async function Home() {
  const baseUrl = "https://api.themoviedb.org/3/";
  const data = await fetch(
    `${baseUrl}/movie/popular?api_key=${process.env.API_KEY}`
  );
  const response = await data.json();
  // console.log(response);

  return (
    <>
      <h1 className="text-center mb-10 font-bold">Popular Movies</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {response.results.map((movie) => (
          <div key={movie.id} className="">
            <Movie
              id={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
              overview={movie.overview}
            />
          </div>
        ))}
      </div>
    </>
  );
}
