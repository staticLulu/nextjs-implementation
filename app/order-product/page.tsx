"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  }
  return (
    <>
      <h1>
        Order Product
      </h1>
      <button onClick={handleClick} className="border border-slate-500 p-1">Place Order</button>
    </>
  )
}