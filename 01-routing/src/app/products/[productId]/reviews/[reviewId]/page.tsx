const ReviewDetail = ({
  params,
}: {
  params: {
    reviewId: string;
    productId: string;
  };
}) => {
  return (
    <>
      <h2>
        Review of product {params.productId} : {params.reviewId}
      </h2>
    </>
  );
};

export default ReviewDetail;
