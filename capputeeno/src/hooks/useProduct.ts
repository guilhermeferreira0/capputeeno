import { ProductFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

if (!process.env.NEXT_PUBLIC_API_URL) throw new Error('URL not Insert');

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(
    process.env.NEXT_PUBLIC_API_URL as string, { query: `
        query {
          Product(id: "${productId}") {
            name
            description
            price_in_cents
            image_url
            category
          }
        }
    `}
  );
}

export function useProduct(id: string) {
  const { data } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ['product', id],
    enabled: !!id
  });

  return {
    data: data?.data?.data?.Product
  }
}
