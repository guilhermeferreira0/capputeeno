import { ProductInCart } from "@/types/products-response";
import { useEffect, useState } from "react";

export function useLocalStorage(item: string, initialValue: any) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let value = localStorage.getItem(item);
    if (value) setValue(JSON.parse(value));
  }, [window]);

  const updateLocalStorage = (newValue: ProductInCart) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue))
  }

  return {
    value,
    updateLocalStorage
  }
}
