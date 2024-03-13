import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductProps {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: UseProductProps) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);
  const increaseBy = (value: number) => {
    if (isControlled.current) {
      // If I add && onChange on the validation, it impacts to JavaScript.
      // So it is more efficient to add the (!) to the onChange! to tell TypeScript that it is not null.
      return onChange!({ count: value, product });
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
