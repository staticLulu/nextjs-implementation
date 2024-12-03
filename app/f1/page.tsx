import Link from "next/link";

export default function F1() {
  return (
    <div>
      <h1 className="text-3xl my-5"> F1 page </h1>

      <Link href={"/f1/f2"}>F2</Link>
    </div>
  )
}