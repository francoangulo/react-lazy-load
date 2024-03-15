import { createContext } from "react";

import {
  InitialValues,
  OnChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from "../interfaces/interfaces";
import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  //   children?: React.ReactElement | React.ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  product: Product;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  className: customClassName,
  product,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    isMinCountReached,
    resetCounter,
  } = useProduct({
    product,
    onChange,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${customClassName}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          isMinCountReached,
          product,
          increaseBy,
          reset: resetCounter,
          maxCount: maxCount,
        })}
      </div>
    </Provider>
  );
};
