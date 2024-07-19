import { FilterBar } from "@/components/filter-bar";
import { ProductsList } from "@/components/products-list";

export default function HomePage() {
  return (
    <main>
      <FilterBar />
      <ProductsList />
    </main>
  );
}
