export default async function Review({
    params,
}: {
    params: Promise<{productid: string, reviewid: string}>
}) {
    const {productid, reviewid} = await params
  return (
    <main>
      <h1>review of {reviewid} for product {productid}</h1>
    </main>
  )
}