import { useDeferredValue } from 'react';
import { ProductsFetchResponse } from '@/types/products-response';
import { useQuery } from '@tanstack/react-query';
import axios, {AxiosPromise} from 'axios';
import { useFilter } from './useFilter';
import { mountQuery } from '@/utils/graphql-filters';

if (!process.env.NEXT_PUBLIC_API_URL) throw new Error('URL not Insert');

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(
    process.env.NEXT_PUBLIC_API_URL as string, { query }
  );
}

export function useProducts() {
  const { type, priority, search } = useFilter();
  const searchDeferred = useDeferredValue(search);
  const query = mountQuery(type, priority);

  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products', type, priority],
    staleTime: 1000 * 60 * 1,
  });

  const products = data?.data?.data?.allProducts;
  const  filteredProducts = products?.filter(prod => prod.name.toLocaleLowerCase().includes(searchDeferred.toLocaleLowerCase()))

  return {
    data: filteredProducts
  }
}
