"use client";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("clicked ");
    router.push("/");
  };

  return (
    <>
      <h1 className=" text-center mt-10 ">Order Product</h1>
      <button
        onClick={handleClick}
        className="bg-blue-300 p-2 rounded-xl ml-20"
      >
        Place Order
      </button>
    </>
  );
};

export default OrderProduct;
