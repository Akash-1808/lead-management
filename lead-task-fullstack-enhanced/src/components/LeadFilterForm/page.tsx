import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LeadFilterFormValues } from '../../types/filterTypes'
import { set } from 'mongoose';

function LeadFilterForm({ isFilterForm, setIsFilterForm, setFilteredLeads }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<LeadFilterFormValues>();
    const onSubmit: SubmitHandler<LeadFilterFormValues> = data => {
        
        setFilteredLeads(data)
    }
    const handleClose = () => {
       setFilteredLeads(null)
        reset()
        setIsFilterForm(false) }
  return (
    <div className='bg-white'>
        <h2 className='text-2xl font-semibold mx-4 mt-6 '>Advanced Filter</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='px-6 py-4 bg-white border-b border-gray-200 '>
            <div className='mb-4 flex gap-4'>
                <label className='block text-sm font-medium mb-1'>Match</label>
                <div className='flex gap-2'>
                    <input {...register("Match", { required: true })} type='radio' value='AND' /> <span className='text-sm font-semibold'>ALL conditions (AND)</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <input {...register("Match", { required: true })} type='radio' value='OR' /> <span className='text-sm font-semibold'>Any condition (OR)</span>
                {errors.Match && <span className="text-red-500 text-xs">Condition Required</span>}
                </div>
            </div>
            <div className='mb-4 flex gap-4 max-w-full '>
                <div >
                <input {...register("status")} placeholder='Status' value={"status"} className="ml-4 flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"/>
            </div>
            <div className='w-full' >
                <select {...register("filterBy")} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg">
                    <option value="New">New</option>
                    <option value="Follow-Up">Follow-Up</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Converted">Converted</option>
                </select>
            </div>
            </div>
            <button className='ml-4 space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 mb-4' >Add Filter</button>
            <hr />
            <div className='flex justify-between max-w-sm right-0 mt-4'>
            <button type='button' className='ml-4 space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50' onClick={handleClose}>Clear</button>
            <button type="submit" className='ml-4 space-x-2 px-4 py-2 border bg-black text-white border-gray-300 rounded-lg hover:bg-gray-800'>Apply Filters</button>
            </div>
            
        </form>
    </div>
  )
}

export default LeadFilterForm