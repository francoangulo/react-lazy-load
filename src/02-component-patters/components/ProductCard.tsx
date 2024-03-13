import { createContext } from "react";

import {
  OnChangeArgs,
  Product,
  ProductContextProps,
} from "../interfaces/interfaces";
import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  product: Product;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({
  children,
  className: customClassName,
  product,
  style,
  onChange,
  value,
}: Props) => {
  const { counter, increaseBy } = useProduct({ product, onChange, value });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${customClassName}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
