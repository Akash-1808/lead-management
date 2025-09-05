import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { LeadFormInputs } from "../../types/formTypes"
import axios from "axios"

export default function LeadForm({ isActiveForm, setIsActiveForm, }) {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormInputs>()
  const onSubmit: SubmitHandler<LeadFormInputs> = async (data) => {
    setIsSubmitting(true);
    try {
      const responded = await axios({
        method: "POST",
        url: import.meta.env.VITE_API_BASE_URL,
        data: data,
      })
      console.log(responded.data)
      setIsActiveForm(false)
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }


//   console.log(watch("name")) // watch input value by passing the name of it


  return (
        <div className="flex items-center justify-center overflow-y-scroll fixed inset-0 bg-black bg-opacity-50 z-20 p-4">
            
        
        <div className={`absolute items-center justify-center h-screen mt-4 `}>
    <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl px-8 py-6 relative">
        <h2 className="text-xl font-semibold pb-4">Add Lead</h2>
    
    <form onSubmit={handleSubmit(onSubmit)} >
                         <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input className="w-full border rounded px-3 py-2 mb-2" placeholder="Name" {...register("name", { required: true })} />
                                {errors.name && <span className="text-red-500 text-xs">Required</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Phone</label>
                                <input className="w-full border rounded px-3 py-2 mb-2" placeholder="Phone" {...register("phoneNumber", { required: true })} />
                                {errors.phoneNumber && <span className="text-red-500 text-xs">Required</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Alt. Phone</label>
                                <input className="w-full border rounded px-3 py-2 mb-2" placeholder="Alt. Phone" {...register("alternatePhoneNumber")} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Email</label>
                                        <input className="w-full border rounded px-3 py-2 mb-2" placeholder="Email" {...register("email",{required:true,pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} />
                                        {errors.email && <span className="text-red-500 text-xs">Invalid email address</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Alt. Email</label>
                                <input className="w-full border rounded px-3 py-2 mb-2" placeholder="Alt. Email" {...register("alternateEmail")} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Status</label>
                                <select className="w-full border rounded px-3 py-2 mb-2" {...register("status")}> 
                                    <option value="New">New</option>
                                    <option value="Follow-Up">Follow-Up</option>
                                    <option value="Qualified">Qualified</option>
                                    <option value="Converted">Converted</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Qualification</label>
                                <select className="w-full border rounded px-3 py-2 mb-2" {...register("qualification")}> 
                                    <option value="Masters">Masters</option>
                                    <option value="PhD">PhD</option>
                                    <option value="High School">High School</option>
                                    <option value="Bachelors">Bachelors</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Interest Field</label>
                                <select className="w-full border rounded px-3 py-2 mb-2" {...register("interestedField")}> 
                                    <option value="Web Development">Web Development</option>
                                    <option value="Data Science">Data Science</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Mobile Development">Mobile Development</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Source</label>
                                <select className="w-full border rounded px-3 py-2 mb-2" {...register("source")}> 
                                    <option value="Website">Website</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Cold Call">Cold Call</option>
                                    <option value="Email Campaign">Email Campaign</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Assigned To</label>
                                <select className="w-full border rounded px-3 py-2 mb-2" {...register("assignedTo")}> 
                                    <option value="John Doe">John Doe</option>
                                    <option value="Jane Smith">Jane Smith</option>
                                    <option value="Emily Davis">Emily Davis</option>
                                    <option value="Robert Johnson">Robert Johnson</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Job Interest</label>
                                <select className="w-full border rounded px-3 py-2 mb-2" {...register("jobInterest")}> 
                                    <option value="Web Development">Web Development</option>
                                    <option value="Data Science">Data Science</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Mobile Development">Mobile Development</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">State</label>
                                <input className="w-full border rounded px-3 py-2 mb-2" placeholder="State" {...register("state")} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">City</label>
                                <input className="w-full border rounded px-3 py-2 mb-2" placeholder="City" {...register("city")} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Passout Year</label>
                                <input className="w-full border rounded px-3 py-2 mb-2" type="number" placeholder="Passout Year" {...register("passOutYear")} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Heard From</label>
                                <input className="w-full border rounded px-3 py-2 mb-2" placeholder="Heard From" {...register("heardFrom")} />
                            </div>
                        </div>
        <div className="flex justify-end space-x-2">
            <button type="button" className="px-4 py-2 rounded bg-gray-200 text-gray-700 " onClick={() => setIsActiveForm(false)}>Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">Add Lead</button>
        </div>
        
    </form>

    </div>
    </div>
    </div>
  )
}
