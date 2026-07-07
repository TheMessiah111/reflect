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
    <div className="flex">
        {/* Sidebar */}
        <div className="fixed flex-1 top-0 left-0 w-55 h-full bg-[#242462] overflow-x-clip flex flex-col items-center text-white">
            {/* Logo */}
            <div className=" w-full flex justify-center items-center py-1 pr-19">
            <LayoutGridIcon height={50} width={50} />
            </div>

            {/* Divider */}
            <hr className="w-full border-t border-amber-100" />

            {/* Sidebar Content */}
            <div className=" w-full mt-0 text-center">
                
                {/* component */}
                <DashboardGroup 
                groupName='PERSONAL'
                items={
                    [
                        {itemname:'Self Service',icon:<User size={17}/>},
                        {itemname:'Surveys', icon:<MessageSquareMore size={17}/>}

                    ]
                }
                />
                {/* component */}
                <DashboardGroup 
                groupName='CORE HR'
                items={
                    [
                        {itemname:'Employee Welfare',icon:<HeartHandshake size={17}/>},
                        {itemname:'Survey Feedback', icon:<MessageCircleMoreIcon size={17}/>}

                    ]
                }
                />
                {/* component */}
                <DashboardGroup 
                groupName='RECRUIMENT'
                items={
                    [
                        {itemname:'Job Requisition',icon:<CalendarRangeIcon size={17}/> },
                        {itemname:'Approvals', icon:<BookCheckIcon size={17}/> },
                        {itemname:'Vacancy', icon:<BriefcaseBusinessIcon size={17}/>  }

                    ]
                }
                />
                {/* component */}
                <DashboardGroup 
                groupName='LEGAL AND CONTRACTS'
                items={
                    [
                        {itemname:'Contracts',icon:<FileTextIcon size={17}/> },
                        {itemname:'Approvals', icon:<BookCheckIcon size={17}/> },

                    ]
                }
                />
                {/* component */}
                <DashboardGroup 
                groupName='OUTSOURCING COMPANIES'
                items={
                    [
                        {itemname:'Companies',icon:<LucideBuilding2 size={17}/> },
                        {itemname:'Approval', icon:<BookCheckIcon size={17}/> },
                        {itemname:'Payment Analytics', icon:<ChartNoAxesCombinedIcon size={17}/>  }

                    ]
                }
                />
                {/* component */}
                <DashboardGroup 
                groupName='PERFORMANCE MANAGEMENT'
                items={
                    [
                        {itemname:'Performance Management',icon:<LucideFileChartLine size={17}/> },
                        {itemname:'Performance Update Metrics', icon:<Medal size={17}/> },
                        {itemname:'Performance Recognition', icon:<Medal size={17}/>  },
                        {itemname:'Analytics and Monitoring', icon:<ChartBar size={17}/>},
                        {itemname:'Settings', icon:<Cog size={17}/>}
                    ]
                }
                />
                {/* component */}
            </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-55 min-h-screen bg-[#a5a1a16d]">
            {/* Header side bar  */}
            <div className='bg-[#ffffff] h-16 flex justify-between items-center text-sm'>
                <div className='flex mx-3 gap-2 text-[#242462]'>Home <ArrowRight/>Dashboard <ArrowRight/>My Profile</div>
                <div className='flex gap-3 mx-5'> 
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border hover:bg-gray-500 transition-colors duration-200 ease-in hover:cursor-pointer">
                        <Bell className="h-5 w-5" />
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border opacity-45 bg-[#2c26265b] hover:cursor-pointer hover:bg-gray-600 transition-colors duration-200 ease-in ">
                        PD
                    </div>
                </div>
            </div>
                
            <div className="flex flex-row pt-3">
                    {/* Sub Nav  */}
                <div className="bg-white rounded-xl m-3 w-64">
                        {/* Picture and role */}
                    <div>
                        <div className='mt-5 ml-5'>
                        <div className='h-auto w-auto mb-4 rounded-2xl'>
                            <Image src='/Chuck.jpg' alt='Profile Pic' width={120} height={120} className='rounded-3xl'/>
                        </div>
                        <div>
                            <p className='font-bold text-sm text-[#242462]'>OLUWAROTIMI EKUNDAYO</p>
                            <span className='text-sm'>Human Resources Manager</span>
                        </div>
                    </div>
                    </div>
                    {/* Sub Navs  */}
                    <div className="my-5">
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

                    {/* Main Page  */}
                <div>
                    {/* Edit Profile */}
                    <div className='w-full rounded-2xl mt-3 mb-4 p-2'>
                        <div className='relative h-auto rounded-2xl shadow-2xl px-3 flex-row justify-baseline bg-[#ffffffa7]'>
                            <div className='flex justify-between'>
                                <div className='text-[#242462] font-bold text-md ml-3 my-3'>MY PROFILE</div>
                                <button className='rounded bg-[#242462] px-3 py-1 text-xs h-auto w-auto text-white my-5 
                                        hover:shadow-xl transition duration-300 ease-in-out hover:scale-105 
                                        hover:cursor-pointer'>
                                            Edit Profile
                                </button>
                            </div>
                            <div className='text-[#242462] text-sm font-semibold pt-6 pb-2 underline decoration-4 ml-3'>
                                Personal
                            </div>
                        </div>
                    </div>

                    {/* Profile Entries  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 p-3 bg-[#ffffffe2] rounded-2xl shadow-2xl'>
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
                    <ProfileEntries header ='Phone Number' body='09183829249'/>
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