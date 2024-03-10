import {
  ProductCard,
  ProductButtons,
  ProductTitle,
  ProductImage,
} from "../components/";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* // + Method 1 - preferred by me cause it really indicates relationship */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
        {/* // + Method 2 */}
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="Coffee Premium" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
