export default function ProductDetails({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <h2>Featured product</h2>
    </>
  );
}
