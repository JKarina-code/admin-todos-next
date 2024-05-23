import { productsGet } from "@/products/data/products";
import { ItemCard } from "@/shopping-cart";
export default async function CartPage  ()  {
  const products = await productsGet();
 
  return (
    <div>page</div>
  )
}
