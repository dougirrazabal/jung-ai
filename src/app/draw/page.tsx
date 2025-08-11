import CardsList from "@/components/CardsList";

export default function DrawPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Selecciona tus cartas</h1>
      {/* Server Component que lista las cartas */}
      <CardsList />
    </div>
  );
}
