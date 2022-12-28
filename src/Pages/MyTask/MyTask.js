import React from 'react';


const MyTask = () => {
    return (
        <div>
            {/* <h1 className='text-center text-7xl'>My Task</h1> */}
            <div>
                <h3 className="text-center text-3xl mb-5">My Task</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image
                                </th>
                                <th>Name</th>
                                <th>Activities</th>
                                <th>Status</th>
                                <th>Completed</th>

                            </tr>
                        </thead>
                        {/* <tbody>
                        {
                            bookings &&

                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-32 rounded">
                                            <img src={booking.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{booking.name}</td>
                                <td>{booking.productName}</td>
                                <td>{booking.price}</td>
                                <th>
                                    {
                                        booking.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-warning btn-xs px-2'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </th>
                            </tr>)
                        }
                    </tbody> */}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyTask;