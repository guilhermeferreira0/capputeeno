export interface ProductsFetchResponse {
  data: {
    allProducts: Product[]
  }
}

export interface Product {
  id: string,
  name: string,
  image_url: string,
  description?: string,
  category?: string,
  price_in_cents: number
}

export interface ProductFetchResponse {
  data: {
    Product: Product
  }
}
