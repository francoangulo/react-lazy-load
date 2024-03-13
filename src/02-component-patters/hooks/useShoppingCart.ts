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
      const productInCart: ProductInCart = shoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prevShoppingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = prevShoppingCart;
      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = prevShoppingCart;
      //   return rest;
      // }

      // return {
      //   ...shoppingCart,
      //   [product.id]: {
      //     ...product,
      //     count,
      //   },
      // };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
