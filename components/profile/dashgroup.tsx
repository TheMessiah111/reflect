import React from 'react'
import {LayoutGridIcon, User, MessageSquareMore, MessageCircleMoreIcon, HeartHandshake, 
        CalendarRangeIcon, BriefcaseBusinessIcon, FileTextIcon,
        BookCheckIcon, LucideBuilding2, LucideFileChartLine,Medal, ChartNoAxesCombinedIcon,
        ChartBar, CogIcon,
        Divide} from 'lucide-react'
   
        
interface DashBoardItemsProps{
    icon?: React.ReactNode;
    name:string;
    href: string;
}
interface DashGroupProps{
    header: string;
    dashboarditems: DashBoardItemsProps[];
}
const Dashgroup = ({header, dashboarditems}: DashGroupProps) => {
  return (
    <div className='mx-6 mt-5 '>
        {/* Header */}
        <div className='mb-4'>
            {header}
        </div>
        <div>
            {
            dashboarditems.map((items)=>
                <div key={items.href}>
                {items.name}
                </div>
            )
            }
        </div>
    </div>
  )
}

export default Dashgroup