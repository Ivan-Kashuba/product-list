import { Spinner, SpinnerProps } from "flowbite-react";


export const PageSpinner = (props: SpinnerProps) => {
  const { size = "lg" } = props;

  return (
    <div className="w-[90vw] h-[80vh] flex items-center justify-center">
      <Spinner size={size} {...props} />
    </div>
  );
};

