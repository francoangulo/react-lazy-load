import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product, InitialValues } from "../interfaces/interfaces";

interface UseProductProps {
  initialValues?: InitialValues;
  product: Product;
  value?: number;
  onChange?: (args: OnChangeArgs) => void;
}

export const useProduct = ({
  initialValues,
  product,
  value = 0,
  onChange,
}: UseProductProps) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = Math.max(
      // the minor between the maxCount and the sum of the counter and the vfalue
      // if there is no max count, it will compare 2 equal values that would be the counter + value
      Math.min(initialValues?.maxCount || counter + value, counter + value),
      0
    );
    if (newValue === counter) return;
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const resetCounter = () => {
    setCounter(initialValues?.count || 0);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached: counter === initialValues?.maxCount,
    isMinCountReached: counter === 0,
    maxCount: initialValues?.maxCount,
    increaseBy,
    resetCounter,
  };
};
