'use client';
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import ReactQueryExplanation from "./react-query-explanation";

const queryClient = new QueryClient();

const ReactQuery: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryExplanation />
      <ToastContainer
        position="top-center"
      />
    </QueryClientProvider>
  );
}

export default ReactQuery;
