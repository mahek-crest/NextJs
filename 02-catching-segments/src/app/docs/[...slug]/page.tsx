const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug.length === 2) {
    return (
      <h2>
        Viewing doc for feature {params.slug[0]} and concept {params.slug[1]}
      </h2>
    );
  } else if (params.slug.length === 1) {
    return <h2>-- Viewing docs for feature {params.slug}</h2>;
  }
  return <h2>Docs home page </h2>;
};

export default Docs;
