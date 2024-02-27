import Link from "next/link";

export default function Home() {
  return (
    <div className=" text-center mt-10 ">
      <h2 className="text-2xl">Welcom home</h2>
      <Link href={"/products"}>Products </Link>
    </div>
  );
}
