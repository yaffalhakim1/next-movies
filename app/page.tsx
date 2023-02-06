// "use client";
import Image from "next/image";
import { Key } from "react";
import Movie from "./Movie";
// import { Carousel } from "flowbite-react";

//when u should use "useclient?" when u need to use onclick or onhover or something like that

export default async function Home() {
  const key = process.env.API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";

  const dataPopular = await fetch(`${baseUrl}/movie/popular?api_key=${key}`);
  const responsePopular = await dataPopular.json();

  const dataTrending = await fetch(
    `${baseUrl}/trending/all/day?api_key=${key}`
  );
  const responseTrending = await dataTrending.json();
  const imagePath = `https://image.tmdb.org/t/p/original`;

  return (
    <>
      <h1 className="text-center mb-10 font-bold mt-8">Popular Movies</h1>
      <div className="md:grid gap-16 md:grid-cols-fluid">
        {responsePopular.results.map(
          (movie: {
            id: Key;
            title: any;
            release_date: any;
            poster_path: any;
            overview: any;
          }) => (
            <div key={movie.id} className="mb-5  md:mb-0">
              <Movie
                id={movie.id}
                title={movie.title}
                release_date={movie.release_date}
                poster_path={movie.poster_path}
                overview={movie.overview}
              />
            </div>
          )
        )}
      </div>
    </>
  );
}
