export default async function ProductDetails({
    params,
}: {
    params: Promise<{productid: string}>
}) {
    const productId = (await params).productid
  return (
    <main>
      <h1>products Details {productId}</h1>
    </main>
  )
}