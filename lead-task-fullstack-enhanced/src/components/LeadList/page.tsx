import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { leadsTypesData } from '../../types/leadsList'




export default function LeadList({leads}:{leads: leadsTypesData[]}) {

    const getStatusBadgeColor = (status) => {
        switch (status) {
            case 'New': return 'bg-blue-100 text-blue-800';
            case 'Qualified': return 'bg-green-100 text-green-800';
            case 'Follow-Up': return 'bg-orange-100 text-orange-800';
            case 'Converted': return 'bg-purple-100 text-purple-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    }


  return (
    <div className="flex-1 flex flex-col">
        {/** Lead List */}
        <table border={2} className='shadow-md'>
          <thead>
            <tr className='mt-2'>
              <th className='font-normal text-gray-700'>Name</th>
              <th className='font-normal text-gray-700'>Contact</th>
              <th className='font-normal text-gray-700'>Status</th>
              <th className='font-normal text-gray-700'>Qualification</th>
              <th className='font-normal text-gray-700'>Interest</th>
              <th className='font-normal text-gray-700'>Source</th>
              <th className='font-normal text-gray-700'>Assigned To</th>
              <th className='font-normal text-gray-700 py-4'>Updated At</th>
            </tr>
          </thead>
          
            {/* Map through leads and display them */}
            <tbody className="divide-y divide-gray-200">
              {leads?leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 cursor-pointer transition-colors bg-white">
                  <td className="px-6 py-4">
                    <div className="text-blue-600 font-medium hover:text-blue-800">
                      {lead.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{lead.phoneNumber}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{lead.qualification}</td>
                  <td className="px-6 py-4 text-gray-900">{lead.interestedField}</td>
                  <td className="px-6 py-4 text-gray-900">{lead.source}</td>
                  <td className="px-6 py-4 text-gray-900">{lead.assignedTo}</td>
                  <td className="px-6 py-4 text-gray-500">{lead.updateDate}</td>
                </tr>
              )):<div className='py-4 bg-gray-200 animate-pulse h-52 w-full'></div>}

          </tbody>
        </table>

        </div>

  )
}
