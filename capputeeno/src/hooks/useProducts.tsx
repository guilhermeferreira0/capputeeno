import { ProductsFetchResponse } from '@/types/products-response';
import { useQuery } from '@tanstack/react-query';
import axios, {AxiosPromise} from 'axios';

if (!process.env.NEXT_PUBLIC_API_URL) throw new Error('URL not Insert');

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(
      process.env.NEXT_PUBLIC_API_URL as string,
      {
        query: `
          query {
            allProducts {
              id
              name
              price_in_cents
              image_url
            }
          }
        `
      }
    );
}

export function useProducts() {
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ['products']
  });
  return {
    data: data?.data?.data?.allProducts
  }
}
