import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};
const ProductDetail = ({ params }: { params: { productId: string } }) => {
  return (
    <>
      <h2>Product detail for : {params.productId}</h2>
    </>
  );
};

export default ProductDetail;
