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
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
  Buttons: (Props: ProductCardButtonsProps) => JSX.Element;
  Image: (Props: ProductCardImageProps) => JSX.Element;
  Title: (Props: ProductCardTitleProps) => JSX.Element;
}

export interface OnChangeArgs {
  count: number;
  product: Product;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  isMinCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
