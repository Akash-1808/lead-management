import React, { useEffect, useState } from "react";
import LeadForm from "../components/LeadForm/page";
import LeadList from "../components/LeadList/page";
import { Filter, Plus, Search } from "lucide-react";
import LeadFilterForm from "../components/LeadFilterForm/page";
import axios from "axios";
import { leadsTypesData } from "../types/leadsList";
import { LeadFilterFormValues } from "../types/filterTypes";




const App = () => {
  const [isActiveForm, setIsActiveForm] = useState(false)
  const [isFilterForm, setIsFilterForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [leads, setLeads] = useState<leadsTypesData[]>([])
  const [filteredLeads, setFilteredLeads] = useState<LeadFilterFormValues[]>([])

  if(!leads){

      useEffect( ()=>{ async function fetchLeads() {
         
       try{
        const responseLead = await axios({
          method:"GET",
          url: "http://localhost:3000/api/leads",

        })
        console.log("Fetched leads:", responseLead.data)
        setLeads(responseLead.data)
      }catch(error){
        console.error("Error fetching leads:", error)
      }
      } fetchLeads()},[])
  
  }
  
  else {
  //   useEffect(()=>{
  //   axios({
  //     method:"GET",
  //     url: `http://localhost:3000/api/leads/search?filter=${filteredLeads[0].filterBy}&status=${filteredLeads[0].status}`,
  //     data: {
  //       filterCondition: filteredLeads[0].Match
  //     }
  //   }).then((response)=>{
  //     console.log(response.data)
  //     setLeads(response.data)
  //   }
  //   ).catch((error)=>{
  //     console.error("Error search leads by filter: ", error)
  //   })
  // },[filteredLeads])


  useEffect(()=>{
    axios({
      method:"GET",
      url:`http://localhost:3000/api/leads/search?filter=${searchTerm}`,
    }).then((response)=>{
      console.log("Search results:", response.data)
      setLeads(response.data)
    }).catch((error)=>{
      console.error("Error searching leads:", error)
    })
  },[searchTerm])
}
  return (
    <div className="p-4 bg-slate-50">
      <h1 className="text-2xl font-bold mb-4">Lead Enquiry Form</h1>
      {/* Lead form component here */}
      {isActiveForm && <LeadForm isActiveForm={isActiveForm} setIsActiveForm={setIsActiveForm} />}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Leads</h2>
              <p className="text-gray-600 mt-1">Manage and track your leads</p>
            </div>
            <button className="px-4 py-2 rounded bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700 " onClick={()=>(console.log(isActiveForm), setIsActiveForm(true))}>
              <Plus className="w-4 h-4" />
              <span>Add Lead</span>
            </button>
          </div>
        </div>

        {/** Search & Filter */}

        <div className="bg-slate-50 border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg  "
              />
            </div>
           {!isFilterForm && <button className="ml-4 flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50" onClick={()=>(setIsFilterForm(true))}>
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Filters</span>
            </button>}
          </div>
        </div>
      
      {/* Lead list component here */}

      {isFilterForm && <LeadFilterForm isFilterForm={isFilterForm} setIsFilterForm={setIsFilterForm} setFilteredLeads={setFilteredLeads} />}
       <LeadList leads={leads} />
    </div>
  );
};

export default App;