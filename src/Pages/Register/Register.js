
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    // const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    // const [createdUserEmail, setCreatedUserEmail] = useState('');
    // const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                navigate('/')
                // const userInfo = {
                //     displayName: data.name
                // }
                // updateUser(userInfo)
                //     .then(() => {
                //         saveUser(data.name, data.email);
                //     })
                //     .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    // const saveUser = (name, email, role) => {
    //     const user = { name, email, role };
    //     fetch('https://find-uke-server.vercel.app/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.group(data);
    //             setCreatedUserEmail(email)
    //         })
    // }




    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-4 bg-lime-50 border my-5'>
                <h2 className='text-2xl text-center font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <br />

                    <input className='bg-lime-800 hover:bg-lime-400 text-white font-bold py-2 px-4 border-b-4 border-lime-700 hover:border-lime-500 rounded' value="Register" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='pt-4'>Already have a <strong>Task-Upkeep  </strong>  account?
                    <br />
                    <Link className='text-emerald-600 text-center underline' to="/login">Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;




