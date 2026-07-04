import React from 'react'
import {LayoutGridIcon, User, MessageSquareMore, MessageCircleMoreIcon, HeartHandshake, 
        CalendarRangeIcon, BriefcaseBusinessIcon, FileTextIcon,
        BookCheckIcon, LucideBuilding2, LucideFileChartLine,Medal, ChartNoAxesCombinedIcon,
        ChartBar, CogIcon} from 'lucide-react'
    
interface DashGroupProps{
    header: string;
    dashboarditems: string[];
}
const Dashgroup = ({header, dashboarditems}: DashGroupProps) => {
  return (
    <div className='mx-6 mt-5 '>
        {/* Header */}
        <div className='mb-4'>
            {header}
        </div>
        <div>
            {/* {
            dashboarditems.map
            } */}
        </div>
    </div>
  )
}

export default Dashgroup