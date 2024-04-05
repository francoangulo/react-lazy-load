import { ProductCard } from "../components/";
import { products } from "../data/products";

import "../styles/custom-classes.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductCard
          key={`catalog-product-${product.id}`}
          product={product}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({
            reset,
            increaseBy,
            count,
            isMaxCountReached,
            isMinCountReached,
            maxCount,
          }) => (
            <>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
