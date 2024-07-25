import React from 'react'

import './ProductCard.css'

const ProductCard = ({product}) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pinter'>
      <div className='h-[20rem]'>
      <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt='' />
      </div>
      <div className="textPart bg-white p-1">
        <p className='font-bold opacity-60'>{product.brand}</p>
        <p>{product.title}</p>
      </div>
      <div className='flex item-center space-x-2 ml-6'>
        <p className='font-semibold'>{product.discountedPrice}</p>
        <p className='line-through opacity-50'>{product.price}</p>
        <p className='text-green-600 font-semibold'>{product.discountPersent}</p>
      </div>
    </div>
  )
}

export default ProductCard
