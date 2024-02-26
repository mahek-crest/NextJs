const ProductDetail = ({ params }: { params: { productId: string } }) => {
  return <h2>Deatils about product : {params.productId}</h2>;
};

export default ProductDetail;
