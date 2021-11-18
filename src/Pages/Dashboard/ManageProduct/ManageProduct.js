import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [allProduct, setAllProduct] = useState([]); 
    useEffect( () => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllProduct(data))
    }, [])

    // delete product
    const handleDeleteProduct = id => {
        const procced = window.confirm('Are you sure you want to delete product?')
        if(procced){
            fetch(`http://localhost:5000/products/${id}`,{
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Product Delete Successfully');
                    const remaingProduct = allProduct.filter(product => product._id !== id)
                    setAllProduct(remaingProduct);
                }
            })

        }
        
    }
    // console.log(allProduct);
    return (
        <div>
            <h2>Manage All Products Here. </h2>
            
            <div className='bg-light'> 
                 <div className="container mt-5">
                     <div className="row"> 
                         {
                             allProduct.map(product => <div className='col-lg-4 col-md-6 col-sm-12' key={product.id}>
                                 <div className="single-product rounded-3  mb-4 bg-light shadow">
                                     <img src={product.image} className='img-fluid' alt="" />
                                     
                                     <div className="content p-3 ">
                                        <h5 className='text-danger fw-bold'>{product.title}</h5>
                                        <p>{product.description.slice(0, 150)}</p>
                                        <h5>Price: {product.price}</h5>
                                         
                                        <button onClick={() => handleDeleteProduct(product._id)} className='btn btn-info mt-3'>Delete</button>
                                        
                                        
                                     </div>
                                 </div>
                             </div>)
                         }
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default ManageProduct;