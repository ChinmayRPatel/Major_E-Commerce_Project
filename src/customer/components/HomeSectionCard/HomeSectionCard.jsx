import React from "react";

function HomeSectionCard({product}) {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-grey">
      <div className="flex justify-center h-[13rem] w-[15rem]">
        {" "}
        {/* Adjust the width here to match the parent container */}
        <img
          className="object-cover object-top w-[12rem] h-full"
          src={product.imageUrl}
          alt="img"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">
          {product.title}
        </p>
      </div>
    </div>
  );
}

export default HomeSectionCard;
