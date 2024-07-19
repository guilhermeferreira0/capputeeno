'use client';
import { FilterContextProvider } from "@/context/filter-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
  children: ReactNode,
}

const theme = {
  deviceBreakpoint: {
    small: '600px',
    medium: '768px',
    large: '992px',
    xlarge: '1200px'
  }
}

export function DefaultProviders(props: DefaultProvidersProps) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>
          {props.children}
        </ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  );
}
