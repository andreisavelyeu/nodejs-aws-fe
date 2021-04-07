import * as Yup from "yup";

export type Product = {
  id: string;
  producer: string;
  model: string;
  description: string;
  price: number;
  imgUrl: string;
};

export const ProductSchema = Yup.object().shape({
  producer: Yup.string().required(),
  model: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
  imgUrl: Yup.string().required(),
});
