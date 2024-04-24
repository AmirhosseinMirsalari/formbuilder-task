import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { FC, PropsWithChildren } from "react";

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
