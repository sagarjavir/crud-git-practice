import React from 'react'
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import data from './data.json'

function Table() {
  return (
    <div className='container'>
            <table className='min-w-full table-auto'>
       <thead>
        <tr className='bg-gray-800'>
            <th>
              <span className='text-gray-200 px-16 py-2'>Name</span>
            </th>
            <th> <span className='text-gray-200 px-16 py-2'>Email</span></th>
            <th><span className='text-gray-200 px-16 py-2'>Salary</span></th>
            <th><span className='text-gray-200 px-16 py-2'>Birthday</span></th>
            <th><span className='text-gray-200 px-16 py-2'>Status</span></th>
            <th><span className='text-gray-200 px-16 py-2'>Action</span></th>
        </tr>
        </thead>
        <tbody className='bg-gray-200'>
          {
           data.map((obj,i) => <Tr{...obj} key={i} />) //next js wont return any thing
          }
        </tbody>
    </table>
    </div>
  )
}

function Tr({id, name, avatar, email, salary, date, status}){
  return (
            <tr className='bg-gray-50 text-center'>
            <td className='px-16 py-2 flex flex-row items-center'>
               <img src={avatar||'#'} alt=''/>
               <span className='text-center ml-2 font-semibold'>{name||"unknown"}</span>
            </td>
            <td className='px-16 py-2'>
                {email||"unknown"}
            </td>
            <td className='px-16 py-2'>
                {salary||"unknown"}
            </td>
            <td className='px-16 py-2'>
                {date||"unknown"}
            </td>
            <td className='px-16 py-2'>
               <button className='cursor'><span className='bg-green-500 text-white px-5 py-1 rounded-full'>{status||"unknown"}</span></button>
            </td>
            <td className='px-16 py-2 flex justify-around gap-5'>
               <button className='cursor-pointer'><span className='bg-green-500'><BiEdit size={20} color={"RGB(34,197,94)"}></BiEdit></span></button>
               <button className='cursor-pointer'><span className='bg-red-500'><BiTrashAlt size={20} color={"RGB(244,63,94)"}></BiTrashAlt></span></button>
            </td>
            </tr>
  )
}
export default Table