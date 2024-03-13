import { Product, ProductInCart } from "../interfaces/interfaces";
import { useState } from "react";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((prevShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prevShoppingCart;
        return rest;
      }

      return {
        ...shoppingCart,
        [product.id]: {
          ...product,
          count,
        },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
