'use client';
import { FilterBar } from "@/components/filter-bar";
import { ProductsList } from "@/components/products-list";
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

export default function HomePage() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <main>
        <FilterBar />
        <ProductsList />
      </main>
    </QueryClientProvider>
  );
}
