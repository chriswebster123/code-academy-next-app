import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import Product from "../components/product";
import { useEffect, useState } from "react";

const products = ["T-Shirt", "Jacket", "Hat"];

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await (await fetch(`api/products`)).json();
      setProducts(res);
    };
    fetchProducts();
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main className="py-20 flex flex-col flex-1 justify-center items-center">
        <p className="leading-normal text-2xl text-center">
          Get started by editing{" "}
          <code className="bg-gray-100 rounded-md p-3 text-lg font-mono">
            pages/index.js
          </code>
        </p>

        <div className="mt-10 flex flex-wrap flex-col sm:flex-row w-full sm:max-w-3xl justify-center items-center">
          {products.map((p) => (
            <Product key={p.id} {...p} />
          ))}
        </div>
      </main>

      <footer className="w-full h-24 flex justify-center items-center border-t border-solid border-gray-200">
        <a
          className="flex flex-1 justify-center items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
