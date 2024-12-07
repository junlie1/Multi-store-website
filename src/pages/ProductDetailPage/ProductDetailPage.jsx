import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent';

const ProductDetailPage = () => {
    const {_id} = useParams();
  return (
    <div style={{ background: '#efefef', height: '1000px'}}>
        <ProductDetailsComponent idProduct = {_id}/> 
    </div>
  )
}

export default ProductDetailPage
