import { useRouter } from "next/dist/client/router";
import Product from "../components/product";
import { IProduct } from "../models/product";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product: IProduct = {
    id: Number(id),
    name: `Product ${id}`,
    cost: 10,
    category: 1,
    image: 0,
  };

  return (
    <main className="px-10 py-6 flex flex-col flex-1 justify-center">
      <Product {...product} />
    </main>
  );
}
