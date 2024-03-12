import { Props as ProductCardButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardImageProps } from "../components/ProductImage";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductCardTitleProps } from "../components/ProductTitle";

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
  Buttons: (Props: ProductCardButtonsProps) => JSX.Element;
  Image: (Props: ProductCardImageProps) => JSX.Element;
  Title: (Props: ProductCardTitleProps) => JSX.Element;
}
