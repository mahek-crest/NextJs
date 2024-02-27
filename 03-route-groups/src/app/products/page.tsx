import Link from "next/link";

export const metadata = {
  title: "all about products",
};

const Products = () => {
  return (
    <>
      <h2>Product details</h2>
      <ul>
        <Link href="products/1">
          <li>Product 1 </li>
        </Link>
        <Link href="products/2">
          <li>Product 2 </li>
        </Link>
        <Link href="products/3" replace>
          <li>Product 3 </li>
        </Link>
      </ul>
    </>
  );
};

export default Products;
