import "../styles/custom-classes.css";
import { ProductCard } from "../components/";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={`catalog-product-${product.id}`}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-bold" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.values(shoppingCart).map((product) => {
          return (
            <ProductCard
              key={`cart-product-${product.id}`}
              product={product}
              className="bg-dark text-white"
              style={{ width: 100 }}
              value={product.count}
              onChange={onProductCountChange}
            >
              <ProductCard.Image className="custom-image" />
              <ProductCard.Buttons
                className="custom-buttons"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </ProductCard>
          );
        })}
      </div>

      <div>
        <code>{JSON.stringify(shoppingCart, null, 4)}</code>
      </div>
    </div>
  );
};
