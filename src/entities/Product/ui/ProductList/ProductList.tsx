import { ProductItem } from "../ProductItem/ProductItem.tsx";
import { ProductListLoader } from "../ProductListLoader/ProductListLoader.tsx";
import { useProductLists } from "../../api/useProductLists/useProductLists.ts";

interface ProductListPropsI {
  pageSize: number;
}

export const ProductList = ({ pageSize }: ProductListPropsI) => {
    const { data, isFetching, isLoading } = useProductLists(pageSize);

    if (isFetching || isLoading) {
      return <ProductListLoader />;
    }

    console.log("data:", data);

    return (
      <>
        <div className="flex flex-wrap justify-center gap-[30px]">
          {data?.map(productItem => {
            return <ProductItem product={productItem} key={productItem.id} />;
          })}
        </div>
      </>

    );
  }
;

