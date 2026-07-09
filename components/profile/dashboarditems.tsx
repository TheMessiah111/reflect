import React from 'react'
import Link from 'next/link'

interface DashboardItemProps {
  itemname: string;
  icon: React.ReactNode;
}

interface DashboardGroupProps {
  groupName: string;
  items: DashboardItemProps[];
}

const DashboardItem = ({ itemname, icon }: DashboardItemProps) => {
  return (
    <Link href ={`/profile/${itemname.toLowerCase().replace(/\s+/g, '-')}`} 
        className='flex text-sm hover:bg-blue-950 hover:text-white rounded-lg mb-2 ml-3 py-1 '>
      <span>{icon}</span>
      <span className='ml-2 '>{itemname}</span>
    </Link>
  )
}

const DashboardGroup = ({ groupName, items }: DashboardGroupProps) => {
  return (
    <div className='px-3 my-2'>
      <div className=' text-gray-500  text-xs whitespace-nowrap font-bold mr-6 w-3 ml-3 my-3'>{groupName}</div>
      {items.map((item) => (
        <DashboardItem key={item.itemname} itemname={item.itemname} icon={item.icon} />
      ))}
    </div>
  )
}

export default DashboardGroup