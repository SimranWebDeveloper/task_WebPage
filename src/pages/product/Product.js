// Product bileşeni
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import { Card } from '../../components/Card';
import { useParams } from 'react-router-dom';

export const Product = () => {
    const { search, setSearch, data } = useContext(GlobalContext);

    const [products, setProducts] = useState([])
    const {categoryName}=useParams()
    // console.log('categoryName',categoryName.length);

    useEffect(() => {
        setProducts(data.filter((item) => item.name.toLowerCase().includes(search)))
    }, [search]) // data'yı bağımlılıklar listesine ekleyin

    return (
        <div className='grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid   justify-items-center items-center   px-smallCon md:px-mediumCon lg:px-largeCon ' >
            {
              !categoryName ? 
              //for search
               products.length > 0 && products.map((product, index) => (
                    <Card key={index} item={product} /> // item olarak gönder
                
                ))
                :
                (products.filter((item)=>item.category===categoryName)).map((product, index) => (
                    <Card key={index} item={product} /> // item olarak gönder
                
                ))

            }
        </div>
    )
}




  


