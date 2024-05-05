import React from 'react'
import { LuClipboardEdit } from "react-icons/lu";
import { FaNewspaper, FaUsers } from "react-icons/fa";
import { FaArrowsToDot } from "react-icons/fa6";
import {
  MdAdminPanelSettings,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { summary } from '../assets/data';
import clsx from 'clsx';
import Chart from '../component/Chart';
import ChartbyM from '../component/ChartbyM';
const Dashbord = () => {

  const totals = summary.tasks
  const stats = [
    {
      _id: "1",
      label: "TOTAL TACHE",
      total: summary?.totalTache || 0,
      icon: <FaNewspaper />,
      bg: "bg-[#1d4ed8]",
    },
    {
      _id: "2",
      label: "TACHE ACHEVEE",
      total: totals["completed"] || 0,
      icon: <MdAdminPanelSettings />,
      bg: "bg-[#0f766e]",
    },
    {
      _id: "3",
      label: "TACHE EN COURS ",
      total: totals["in progress"] || 0,
      icon: <LuClipboardEdit />,
      bg: "bg-[#f59e0b]",
    },
    {
      _id: "4",
      label: "TACHE A FAIRE",
      total: totals["todo"],
      icon: <FaArrowsToDot />,
      bg: "bg-[#be185d]" || 0,
    },
  ];
  return (
    <div className='h-full py-4'>
      <div className='grid grid-cols-1 md:grid-cols-4 p-4 gap-4'>
      {stats.map(({label,total,icon,bg},index)=>(
       <div className='w-full h-32 bg-white p-5 shadow-md rounded-md flex items-center justify-between'>
          <div className='h-full flex flex-1 flex-col justify-between'>
          <p className='text-base text-gray-600 '>{label}</p>
          <span className='text-2xl font-semibold'>{total}</span>
          <span className='text-sm text-gray-400'>60 le mois dernier</span>
          </div>
          <div className={clsx('w-10 h-10 rounded-full flex items-center justify-center text-white ',bg)}>
              {icon}
          </div>
       </div>       
      ))}
      </div>
      <div className='flex flex-col md:flex-row gap-2 p-5'>
      <div className='w-full bg-white my-16 p-4 rounded shadow-sm'>
        <h4 className='text-xl text-gray-600 font-semibold'>
          Tache Par Date
        </h4>
        <Chart/>
      </div>
      <div className='w-full bg-white my-16 p-4 rounded shadow-sm'>
        <h4 className='text-xl text-gray-600 font-semibold'>
          Tache Par Mois
        </h4>
        <ChartbyM/>
      </div>
      </div>
    </div>
  )
}

export default Dashbord

