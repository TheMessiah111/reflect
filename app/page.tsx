// import React from 'react'
// import ReflectHero from '@/components/reflectHero'
// import FeatureList from '@/components/featureList'


// export const Home = () => {
//   return (
//     <div className=' '>
//       <ReflectHero/>
//       <FeatureList/>
//     </div>
//   )
// }
// export default Home

import React from 'react'
import {LayoutGridIcon, User, MessageSquareMore, MessageCircleMoreIcon, HeartHandshake, 
        CalendarRangeIcon, BriefcaseBusinessIcon, FileTextIcon,
        BookCheckIcon, LucideBuilding2, LucideFileChartLine,Medal, ChartNoAxesCombinedIcon,
        ChartBar,
        ArrowRight,
        Bell,
        Cog} from 'lucide-react'
import Image from 'next/image'
import Profilecard from '@/components/profile/profilecard'
import ProfileEntries from '@/components/profile/profileEntries'
import DashboardGroup from '@/components/profile/dashboarditems'

const Dashboard = () => {
  return (
    <div className='flex flex-row'>
        {/* Dashboard */}
        <div className='relative bg-blue-900 w-auto'>
            {/* Logo */}
            <div className='flex justify-center my-8'>
                <LayoutGridIcon height={70} width={70}/>
            </div>
            <hr />
            {/* contents */}
            <div>
                {/* component */}
                <DashboardGroup 
                groupName='PERSONAL'
                items={
                    [
                        {itemname:'Self Service',icon:<User/>},
                        {itemname:'Surveys', icon:<MessageSquareMore/>}

                    ]
                }
                />
                {/* component */}
                <DashboardGroup 
                groupName='CORE HR'
                items={
                    [
                        {itemname:'Employee Welfare',icon:<HeartHandshake/>},
                        {itemname:'Survey Feedback', icon:<MessageCircleMoreIcon/>}

                    ]
                }
                />
                {/* component */}
                <DashboardGroup 
                groupName='RECRUIMENT'
                items={
                    [
                        {itemname:'Job Requisition',icon:<CalendarRangeIcon/> },
                        {itemname:'Approvals', icon:<BookCheckIcon/> },
                        {itemname:'Vacancy', icon:<BriefcaseBusinessIcon/>  }

                    ]
                }
                />
                {/* component */}
                <DashboardGroup 
                groupName='LEGAL AND CONTRACTS'
                items={
                    [
                        {itemname:'Contracts',icon:<FileTextIcon/> },
                        {itemname:'Approvals', icon:<BookCheckIcon/> },

                    ]
                }
                />
                {/* component */}
                <DashboardGroup 
                groupName='OUTSOURCING COMPANIES'
                items={
                    [
                        {itemname:'Companies',icon:<LucideBuilding2/> },
                        {itemname:'Approval', icon:<BookCheckIcon/> },
                        {itemname:'Payment Analytics', icon:<ChartNoAxesCombinedIcon/>  }

                    ]
                }
                />
                {/* component */}
                <DashboardGroup 
                groupName='PERFORMANCE MANAGEMENT'
                items={
                    [
                        {itemname:'Performance Management',icon:<LucideFileChartLine/> },
                        {itemname:'Performance Update Metrics', icon:<Medal/> },
                        {itemname:'Performance Recognition', icon:<Medal/>  },
                        {itemname:'Analytics and Monitoring', icon:<ChartBar/>},
                        {itemname:'Settings', icon:<Cog/>}

                    ]
                }
                />
                {/* component */}
            </div>
        </div>
        <div className='flex-cols relative w-6/7 h-full p-6 pb-65 bg-[#ffffffe2] text-black'>
            <div className='bg-white h-2/13 flex py-5 justify-between items-center text-xl'>
                <div className='flex mx-3 gap-2 text-blue-900'>Home <ArrowRight/>Dashboard <ArrowRight/>My Profile</div>
                <div className='flex gap-3 mx-5'> 
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border hover:bg-gray-500 transition-colors duration-200 ease-in hover:cursor-pointer">
                        <Bell className="h-5 w-5" />
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border opacity-45 bg-[#2c26265b] hover:cursor-pointer hover:bg-gray-600 transition-colors duration-200 ease-in ">
                        PD
                    </div>
                </div>
            </div>
            <div className=' relative h-full pb-5 w-6/7 mt-8 ml-7 flex gap-6 bg-[#ffffff28]'>
                {/* Sub */}
                <div className=' relative w-3/6 h-full px-2 rounded-2xl bg-[#ffffffe2]'>
                    <div className='mt-5 ml-5'>
                        <div className='h-auto w-auto mb-4 rounded-2xl'>
                            <Image src='/Chuck.jpg' alt='Profile Pic' width={120} height={120} className='rounded-3xl'/>
                        </div>
                        <div>
                            <p className='font-bold text-sm text-blue-900'>OLUWAROTIMI EKUNDAYO</p>
                            <span className='text-sm'>Human Resources Manager</span>
                        </div>
                    </div>
                    <div>
                        <Profilecard name='Personal Data' status={1} />
                        <Profilecard name='Bank Details' status={0} />
                        <Profilecard name='Emergency Contact' status={0} />
                        <Profilecard name='BVN' status={1} />
                        <Profilecard name='Identity' status={0} />
                        <Profilecard name='Email' status={0} />
                        <Profilecard name='Mobile Number' status={1} />
                        <Profilecard name='Nationality' status={0} />
                        <Profilecard name='Benefit & Tax Details' status={0} />
                        <Profilecard name='Address' status={1} />
                    </div>

                </div>
                {/* Detailed*/}
                <div className='w-full rounded-2xl'>
                    <div className='relative h-auto rounded-2xl shadow-2xl px-3 flex-row justify-baseline bg-[#ffffffa7]'>
                        <div className='flex justify-between'>
                            <div className='text-blue-900 font-bold text-2xl ml-3 my-3'>MY PROFILE</div>
                            <button className='rounded bg-blue-900 px-4 py-2 text-white my-5 hover:shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer'>Edit Profile</button>
                        </div>
                        <div className='text-blue-900 text-lg font-semibold pt-6 pb-2 underline decoration-4 ml-3'>
                            Personal
                        </div>
                        </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 mb-5 bg-[#ffffffe2] rounded-2xl shadow-2xl'>
                    <ProfileEntries header='First Name' body='OLUWAROTIMI' />
                    <ProfileEntries header='Middle Name' body='RICHARDS' />
                    <ProfileEntries header='Last Name' body='EKUNDAYO' />
                    <ProfileEntries header='Date Of Birth' body='2021-06-03' />
                    <ProfileEntries header='Age' body='5' />
                    <ProfileEntries header='Hire Date' body='2023-06-23' />
                    <ProfileEntries header='Sex' body='Male' />
                    <ProfileEntries header='Employee Type' body='DIRECT HIRE' />
                    <ProfileEntries header='Job Title' body='Human Resources Manager' />
                    <ProfileEntries header='Title' body='MR' />
                    <ProfileEntries header='Staff ID' body='HYD-12344' />
                    <ProfileEntries header='Preffered Name' body='ROZAY' />
                    <ProfileEntries header='Previous Name' body='OLA' />
                    <ProfileEntries header='Maidan Name ' body='N/A' />
                    <ProfileEntries header='Fathers Name' body='EKUNDAYO ANDREW' />
                    <ProfileEntries header ='Mothers Name' body='EKUNDAYO RUTH'/>
                    <ProfileEntries header ='Maidan Name' body='N/A'/>
                    <ProfileEntries header ='Marital Status' body='MARRIED'/>
                    <ProfileEntries header ='No of Children' body='100'/>
                    <ProfileEntries header ='Phone Number' body='091838292493'/>
                    <ProfileEntries header ='Religion' body='CHRISTIANITY'/>
                    <ProfileEntries header ='City of Origin' body='Ibadan'/>
                    <ProfileEntries header ='State of Origin' body='Oyo'/>
                    <ProfileEntries header ='City of Residence' body='Ibadan'/>
                </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Dashboard