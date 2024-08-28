import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Order() {

    const [order, setOrder] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/get-order').then((result) => {
            console.log(result.data);
            setOrder(result.data)

        }).catch((error) => {
            console.log(error);

        })
    }, [])

  return (
    <div className='p-6 '>
                <h1 className='text-3xl font-bold'>Orders</h1>
                <p className='text-slate-400 text-sm'>Manage billing information and view recipes</p>

                <div class="relative overflow-x-auto mt-4">
                    <table class="w-full text-sm text-left rtl:text-right ">
                        <thead class="text-xs text-gray-700 uppercase  dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Product Id
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Quantity
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.map((item) => 
                                <tr class="bg-white border-b ">
                                    <th scope="row" class="px-6 py-4 font-mediumwhitespace-nowrap ">
                                        {item.orderId}
                                    </th>
                                    <td class="px-6 py-4">
                                    {item.name}
                                    </td>
                                    <td class="px-6 py-4">
                                    {item.price}
                                    </td>
                                    <td class="px-6 py-4">
                                    {item.quantity}
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
                <p className='text-orange-500 cursor-pointer mt-5 underline'>Load More</p>


                <div className='mt-5'>
                    <h1 className='font-semibold'>Payment Method</h1>
                    <p className='text-slate-400 text-sm'>Manage billing information and view recipes</p>
                    <div className='flex items-center gap-5 mt-4'>
                        <img src="./visa.png" alt="" className='w-20 my-3' />
                        <p>Visa Ending in 255</p>
                        <button className='px-5 py-2 border rounded-md'>Remove</button>
                    </div>
                </div>

            </div>
  )
}

export default Order