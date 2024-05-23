"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5";
import { Product } from "@/products/interface/product";
import { Star } from "./Star";
export const ProductCard = ({ id, title, price, image, rating }: Product) => {
  const { rate } = rating;
  const router = useRouter();

  const onAddProduct = () => {};

  const onRemoveProduct = () => {};
  return (
    <div className="shadow rounded-lg max-w-sm border-solid border-2 border-orange-100">
      <div className="p-2">
        <Image
          width={100}
          height={100}
          className="rounded"
          src={image}
          alt="product image"
        />
      </div>
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="font-semibold text-xl tracking-tight ">{title}</h3>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <Star />
          <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">
            {rate.toFixed()}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${price.toFixed(2)}</span>

          <div className="flex">
            <button
              onClick={onAddProduct}
              className="text-white mr-2  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              <IoAddCircleOutline size={25} />
            </button>
            <button
              onClick={onRemoveProduct}
              className="text-white focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-800"
            >
              <IoTrashOutline size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
