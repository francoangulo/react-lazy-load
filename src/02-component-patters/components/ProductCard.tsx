import { createContext } from "react";

import { Product, ProductContextProps } from "../interfaces/interfaces";
import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  product: Product;
  style?: React.CSSProperties;
}

export const ProductCard = ({
  children,
  className: customClassName,
  product,
  style,
}: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${customClassName}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
