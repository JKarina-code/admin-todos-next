import { productsGet } from "@/products/data/products";
import { ProductCard } from "@/products/components/ProductCard";
import { Product } from "@/products/interface/product";

async function ProductsPage() {
  const products = await productsGet();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {products.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
export default ProductsPage;
