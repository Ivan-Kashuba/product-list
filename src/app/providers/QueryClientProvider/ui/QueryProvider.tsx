import { QueryClientProvider } from "react-query";
import { ReactNode } from "react";
import { queryClient } from "../config/queryClient.ts";


interface QueryProviderI {
  children: ReactNode;
}

export const QueryProvider = ({ children }: QueryProviderI) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};