import Image from "next/image";
import Link from "next/link";

export default async function MovieDetail({ params }) {
  const imagePath = `https://image.tmdb.org/t/p/original`;
  const baseUrl = "https://api.themoviedb.org/3/";
  const { id } = params;
  const data = await fetch(
    `${baseUrl}/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const response = await data.json();
  return (
    <div>
      <h1 className="mt-5">Movie Detail</h1>
      <Image
        src={imagePath + response.poster_path}
        alt={response.title}
        width={300}
        height={300}
      />
      <h2>{response.title}</h2>
      <div className="container bg-green-500 w-1/12">
        <p className="text-center">{response.status}</p>
      </div>

      <h3>{response.release_date}</h3>
      <p>{response.overview}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const baseUrl = "https://api.themoviedb.org/3/";
  const data = await fetch(
    `${baseUrl}/movie/popular?api_key=${process.env.API_KEY}`
  );
  const response = await data.json();
  const paths = response.results.map((movie) => ({
    params: { id: movie.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
