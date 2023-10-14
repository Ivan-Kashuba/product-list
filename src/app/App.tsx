import "./styles/index.css";
import { ProductsPage } from "@/pages/ProductsPage";
import { Suspense } from "react";
import { PageSpinner } from "@/shared/ui/PageSpinner";

export default function App() {

  return (
    <Suspense fallback={<PageSpinner size="lg" />}>
      <ProductsPage />
    </Suspense>
  );
}
