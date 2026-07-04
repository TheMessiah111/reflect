import React from 'react'
import {LayoutGridIcon, User, MessageSquareMore, MessageCircleMoreIcon, HeartHandshake, 
        CalendarRangeIcon, BriefcaseBusinessIcon, FileTextIcon,
        BookCheckIcon, LucideBuilding2, LucideFileChartLine,Medal, ChartNoAxesCombinedIcon,
        ChartBar, CogIcon} from 'lucide-react'
import Dashgroup from '@/components/profile/dashgroup'

const Dashboard = () => {
  return (
    <div className='flex flex-row'>
        {/* Dashboard */}
        <div className='bg-blue-900 h-screen w-60'>
            {/* Logo */}
            <div className='flex justify-center my-2'>
                <LayoutGridIcon height={70} width={70}/>
            </div>
            <hr />
            <div>
                <Dashgroup header='' dashboarditems={["Big O", "lick"]}/>
            </div>
        </div>
        <div className='bg-amber-50'>

        </div>
    </div>
  )
}

export default Dashboard