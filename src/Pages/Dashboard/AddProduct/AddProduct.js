import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const onSubmit = data => {
         axios.post('https://immense-brushlands-13580.herokuapp.com/products', data)
            .then(res => {
                 if(res.data.insertedId){
                     alert('Product Added Successfully');
                     reset();
                 }
            })

        };
    return (
        <div>
            <h3 className='m-4'>Add Your Product Become your vendor </h3>
            <form onSubmit={handleSubmit(onSubmit) } className='p-3 border w-50 mx-auto bg-dark'> 
                
                <input type='text' className='form-control mb-2'   {...register("title")} placeholder='Add Title' />
                    

                <textarea type='text' className='form-control mb-2' {...register("description", { required: true })} placeholder='description' /> 

                <input   className='form-control mb-2' {...register("image", { required: true })} placeholder='image link' />

                <input type='number' className='form-control mb-2' {...register("price", { required: true })} placeholder='Price' /> 

                {errors.exampleRequired && <span>This field is required</span>}
                
                <input value="Add Product" className='btn btn-info' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;