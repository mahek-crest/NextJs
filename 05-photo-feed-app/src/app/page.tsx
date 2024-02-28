import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h2 className="text-2xl text-center m-5">
          Explore the new woders of the world
        </h2>
        <Link
          className="ml-[47%] bg-gray-300 px-5 py-3 rounded-3xl"
          href={"/photo-feed"}
        >
          Explore
        </Link>
      </div>
    </>
  );
}
