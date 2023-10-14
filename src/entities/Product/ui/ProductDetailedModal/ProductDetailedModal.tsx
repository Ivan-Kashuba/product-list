import { Modal, Spinner } from "flowbite-react";
import { useProductItem } from "@/entities/Product/api/useProductItem/useProductItem.ts";
import StarIcon from "@/shared/assets/star-icon.svg";

interface ProductDetailedModalI {
  productId: number;
  isModalOpened: boolean;
  setIsModalOpened: (status: boolean) => void;
}

export const ProductDetailedModal = ({ productId, isModalOpened, setIsModalOpened }: ProductDetailedModalI) => {
  const { data, isError, isLoading, isFetching } = useProductItem(productId);
  const onModalClose = () => {
    setIsModalOpened(false);
  };


  if (isLoading || isFetching) {
    return <Modal dismissible show={isModalOpened} onClose={onModalClose}>
      <h1 className="w-[640px] h-[540px] flex items-center justify-center text-red-600 font-bold">
        <Spinner size="lg" />
      </h1>
    </Modal>;
  }

  if (isError) {
    return (
      <Modal dismissible show={isModalOpened} onClose={onModalClose}>
        <h1 className="w-[640px] h-[540px] flex items-center justify-center text-red-600 font-bold">
          Can't upload data about this product. Try again later.
        </h1>
      </Modal>
    );
  }

  return (
    <Modal dismissible show={isModalOpened} onClose={onModalClose}>
      <div className="p-[30px]">
        <h2 className="text-h2 font-bold text-center">{data?.title}</h2>
        <div className="text-center mb-[30px]">({data?.category})</div>
        <img src={data?.image} className="w-[200px] h-[200px] mb-[30px] m-auto" alt="Product Image" />
        <p className="text-h3 mb-[50px]">{data?.description}</p>
        <div className="flex justify-between items-center font-bold text-h1">
          <h1>{data?.price} $</h1>
          <div>
            <div className="flex items-center gap-[5px]">
              <div>
                {data?.rating.rate}
              </div>
              <img className="w-[30px] h-[30px]" src={StarIcon} alt="Start" />
            </div>
            <p className="text-small"><span>{data?.rating.count}</span> reviews</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

