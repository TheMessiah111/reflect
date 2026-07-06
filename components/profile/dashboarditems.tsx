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
    <Link href ={`/profile/${itemname.toLowerCase().replace(/\s+/g, '-')}`} className='flex ml-4 my-2 hover:bg-blue-950 hover:text-white rounded-lg py-2 px-3'>
      {icon}
      <span className='ml-2'>{itemname}</span>
    </Link>
  )
}

const DashboardGroup = ({ groupName, items }: DashboardGroupProps) => {
  return (
    <div className='m-6'>
      <div className='opacity-60 my-5 font-bold'>{groupName}</div>
      {items.map((item) => (
        <DashboardItem key={item.itemname} itemname={item.itemname} icon={item.icon} />
      ))}
    </div>
  )
}

export default DashboardGroup