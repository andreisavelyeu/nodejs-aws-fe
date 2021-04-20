import * as Yup from "yup";

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  img_url: string;
  count: number;
};

export const ProductSchema = Yup.object().shape({
  id: Yup.string(),
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number(),
  img_url: Yup.string(),
  count: Yup.number(),
});
