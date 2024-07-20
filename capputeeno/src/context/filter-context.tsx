'use client';
import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { createContext, ReactNode, useState } from "react";

export const FilterContext = createContext({
  search: '',
  page: 0,
  perPage: 0,
  type: FilterType.ALL,
  priority: PriorityTypes.POPULARITY,
  productsLength: 0,
  setPriority: (value: PriorityTypes): void => {},
  setSearch: (value: string): void => {},
  setPage: (value: number): void => {},
  setType: (value: FilterType): void => {},
  setProductsLength: (value: number): void => {},
});

interface ProviderProps {
  children: ReactNode
}

export function FilterContextProvider({children}: ProviderProps) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(12);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(PriorityTypes.NEWS);
  const [productsLength, setProductsLength] = useState(perPage);

  if (page < 0) setPage(4);
  if (page > 4) setPage(0);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        perPage,
        type,
        priority,
        productsLength,
        setProductsLength,
        setSearch,
        setPage,
        setType,
        setPriority
      }}>
      {children}
    </FilterContext.Provider>
  );
}
