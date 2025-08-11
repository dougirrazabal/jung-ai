export default function Page({ params }: { params: { id: string } }) {
  return <h1>Interpretation {params.id}</h1>;
}
