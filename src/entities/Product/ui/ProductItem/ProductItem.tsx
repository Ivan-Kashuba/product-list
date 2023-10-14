import { Button, Card } from "flowbite-react";
import { ProductI } from "../../model/types/product.ts";
import StarIcon from "@/shared/assets/star-icon.svg";
import { ProductDetailedModal } from "../ProductDetailedModal/ProductDetailedModal.tsx";
import { useState } from "react";

interface ProductItemI {
  product: ProductI,
}

export const ProductItem = ({ product }: ProductItemI) => {
  const { description, rating, title, price, category, image, id } = product;

  const [isModalOpened, setIsModalOpened] = useState(false);

  const onModalOpen = () => {
    setIsModalOpened(true);
  };


  return (
    <>
      <Card className="w-[400px]">
        <h2 className="text-h2 font-bold">{title}</h2>
        <img src={image} className="w-[200px] h-[200px] m-auto" alt="Product Image" />
        <p className="text-h3 display-box box-orient-vertical line-clamp-3 overflow-ellipsis">{description}</p>
        <p>Category: <span className="font-bold">{category}</span></p>
        <div className="flex justify-between items-center font-bold text-h1">
          <h1>{price} $</h1>
          <div>
            <div className="flex items-center gap-[5px]">
              <div>
                {rating.rate}
              </div>
              <img className="w-[30px] h-[30px]" src={StarIcon} alt="Start" />
            </div>
            <p className="text-small"><span>{rating.count}</span> reviews</p>
          </div>
        </div>
        <Button onClick={onModalOpen} size="sm" outline>More information</Button>
      </Card>
      {isModalOpened &&
        <ProductDetailedModal productId={id} isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />}
    </>
  );
};

