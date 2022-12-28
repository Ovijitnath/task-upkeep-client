import React from 'react';
import { useForm } from 'react-hook-form';

const AddTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgData => {
        //         if (imgData.success) {
        //             const product = {
        //                 name: data.name,

        //                 category_id: data.category,
        //                 picture: imgData.data.url,

        //                 sellersName: data.sellerName,
        //                 location: data.location,
        //                 originalPrice: data.orprice,
        //                 condition: data.condition,
        //                 resalePrice: data.reprice,
        //                 yearOfUse: data.year,
        //                 postedTime: data.time

        //             }
        //             console.log(product)


        //             fetch('https://find-uke-server.vercel.app/catagory', {
        //                 method: 'POST',
        //                 headers: {
        //                     'content-type': 'application/json',
        //                     authorization: `bearer ${localStorage.getItem('accessToken')}`
        //                 },
        //                 body: JSON.stringify(product)
        //             })
        //                 .then(res => res.json())
        //                 .then(result => {
        //                     console.log(result);
        //                     toast.success(`${data.name} is added successfully`);

        //                 })



        //     }
        // })
    }

    return (
        <div>
            <h2 className='text-3xl text-center pt-2'>Add Task</h2>

            <div className='flex justify-center items-center my-5'>

                <div className='w-96 p-4 bg-cyan-100 border my-5'>
                    <div className='flex justify-center items-center py-5'>
                        <form onSubmit={handleSubmit(handleAddProduct)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Name</span></label>
                                <input type="text" {...register("name", {
                                    required: "Name is Required"
                                })} className="input input-bordered w-full max-w-xs" />

                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Activities</span></label>
                                <input type="text" {...register("location", {
                                    required: "Name is Required"
                                })} className="input input-bordered w-full max-w-xs" />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Photo</span></label>
                                <input type="file" {...register("image", {
                                    required: "Photo is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                                {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                            </div>
                            <br />
                            <input className='bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded py-1' value="Submit" type="submit" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AddTask;