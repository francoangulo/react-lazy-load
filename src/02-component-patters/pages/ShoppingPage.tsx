import {
  ProductCard,
  ProductButtons,
  ProductTitle,
  ProductImage,
} from "../components/";
import "../styles/custom-classes.css";

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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        {/* // + Method 2 */}
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage
            className="custom-image"
            style={{
              boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
            }}
          />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
          <ProductImage
            style={{
              boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
              borderRadius: 0,
              borderTopRightRadius: "15px",
              borderTopLeftRadius: "15px",
            }}
          />
          <ProductTitle style={{ fontWeight: "bold" }} />
          <ProductButtons style={{ borderWidth: "2px" }} />
        </ProductCard>
      </div>
    </div>
  );
};
