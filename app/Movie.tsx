import Link from "next/link";
import Image from "next/image";

export default function Movie({
  title,
  release_date,
  overview,
  poster_path,
  id,
}) {
  const imagePath = `https://image.tmdb.org/t/p/original`;

  return (
    <div>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          alt={title}
          width={500}
          height={500}
        />
      </Link>
      <h1>{title}</h1>

      <h2>Release date : {release_date}</h2>
    </div>
  );
}
