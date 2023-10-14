import { ChangeElementsSize } from "@/features/changeNumberOfElementsOnPage";
import { useState } from "react";
import { ProductList, useProductLists } from "@/entities/Product";


export default function ProductsPage() {
  const [pageSize, setPageSize] = useState(6);
  const { isError } = useProductLists(pageSize);


  if (isError) {
    return (
      <h2 className="w-[100vw] h-[100vh] text-red-500 text-h1 flex items-center justify-center">
        Can't load products now, try again later
      </h2>
    );
  }

  return (
    <main className="p-[30px]">
      <h1 className="text-h1 font-bold text-center mb-[30px]">Products</h1>
      <ChangeElementsSize limitNumber={pageSize} setLimitNumber={setPageSize} />
      <ProductList pageSize={pageSize} />
    </main>
  );
};

