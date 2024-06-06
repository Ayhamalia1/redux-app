import React from 'react'
import { useGetProductsQuery } from '../../service/reduxApi'

export default function Product() {
  const {data}=useGetProductsQuery()
  console.log(data)
  return (
    <div>Product</div>
  )
}
