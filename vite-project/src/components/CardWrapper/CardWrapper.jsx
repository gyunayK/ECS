import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card';

function CardWrapper() {

  const productsData = useSelector((state) => state.store.products.data);
  console.log(productsData);




  return (
    <>
    <div className="mt-36 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-flow-col-1">
      {productsData.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div> 
    </>
  )
}

export default CardWrapper