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
          className="bg-dark text-white"
          initialValues={{
            count: 4,
            maxCount: 20,
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
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title className="text-bold" />
              <ProductCard.Buttons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              {!isMinCountReached && (
                <button onClick={() => increaseBy(-2)}>-2</button>
              )}
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(2)}>+2</button>
              )}
              <span>
                {" "}
                0{"<="}
                {count}
                {"<="}
                {maxCount}{" "}
              </span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
