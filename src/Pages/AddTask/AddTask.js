import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Context/AuthProvider';

const AddTask = () => {

    // const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleAddTask = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const task = {
                        name: data.name,
                        email: data.email,
                        activities: data.activities,
                        picture: imgData.data.url,
                    }

                    fetch('http://localhost:5000/alltasks', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(task)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.activities} is added successfully`);
                            navigate('/mytask')
                        })
                }
            })
    }

    return (
        <div>
            <h2 className='text-3xl text-center pt-2'>Add Task</h2>

            <div className='flex justify-center items-center my-5'>

                <div className='w-96 p-4 bg-cyan-100 border my-5'>
                    <div className='flex justify-center items-center py-5'>
                        <form onSubmit={handleSubmit(handleAddTask)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Name</span></label>
                                <input type="text" {...register("name", {
                                    required: "Name is Required"
                                })} className="input input-bordered w-full max-w-xs" />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Email</span></label>
                                <input type="email" {...register("email", {
                                    required: "Email is Required"
                                })} className="input input-bordered w-full max-w-xs" />

                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Activities</span></label>
                                <input type="text" {...register("activities", {
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