import React from 'react'
import {LayoutGridIcon, User, MessageSquareMore, MessageCircleMoreIcon, HeartHandshake, 
        CalendarRangeIcon, BriefcaseBusinessIcon, FileTextIcon,
        BookCheckIcon, LucideBuilding2, LucideFileChartLine,Medal, ChartNoAxesCombinedIcon,
        ChartBar, CogIcon,
        MessageCircle,
        Building2Icon,
        ArrowRight,
        Circle,
        Bell} from 'lucide-react'
import Dashgroup from '@/components/profile/dashgroup'
import Image from 'next/image'
import Profilecard from '@/components/profile/profilecard'
import ProfileEntries from '@/components/profile/profileEntries'

const Dashboard = () => {
  return (
    <div className='flex flex-row'>
        {/* Dashboard */}
        <div className='relative bg-blue-900 w-1/7'>
            {/* Logo */}
            <div className='flex justify-center my-8'>
                <LayoutGridIcon height={70} width={70}/>
            </div>
            <hr />
            {/* contents */}
            <div>
                {/* component */}
                <div className='m-6'>
                    <div className='opacity-60'>PERSONAL</div>
                    <div className='flex ml-4'> 
                        <User/> 
                        <span className='ml-2'>Self Service</span>
                    </div>
                    <div className='flex ml-4 my-2'> 
                        <MessageSquareMore/> 
                        <span className='ml-2'>Surveys</span>
                    </div>
                </div>
                {/* component */}
                 <div className='m-6'>
                    <div className='opacity-60'>CORE HR</div>
                    <div className='flex ml-4'> 
                        <HeartHandshake/> 
                        <span className='ml-2'>Employee Welfare</span>
                    </div>
                    <div className='flex ml-4 my-2'> 
                        <MessageCircleMoreIcon/> 
                        <span className='ml-2'>Survey Feedback</span>
                    </div>
                </div>
                {/* component */}
                 <div className='m-6'>
                    <div className='opacity-60'>RECRUIMENT</div>
                    <div className='flex ml-4'> 
                        <CalendarRangeIcon/> 
                        <span className='ml-2'>Job Requisition</span>
                    </div>
                    <div className='flex ml-4 my-2'> 
                        <BookCheckIcon/> 
                        <span className='ml-2'>Approvals</span>
                    </div>
                    <div className='flex ml-4 my-2'> 
                        <BriefcaseBusinessIcon/> 
                        <span className='ml-2'>Vacancy</span>
                    </div>
                </div>
                {/* component */}
                <div className='m-6'>
                    <div className='opacity-60'>LEGAL AND CONTRACTS</div>
                    <div className='flex ml-4'> 
                        <FileTextIcon/> 
                        <span className='ml-2'>Contracts</span>
                    </div>
                    <div className='flex ml-4 my-2'> 
                        <BookCheckIcon/> 
                        <span className='ml-2'>Approvals</span>
                    </div>
                </div>
                {/* component */}
                <div className='m-6'>
                    <div className='opacity-60'>OUTSOURCING COMPANIES</div>
                    <div className='flex ml-4'> 
                        <LucideBuilding2/> 
                        <span className='ml-2'>Companies</span>
                    </div>
                    <div className='flex ml-4 my-2'> 
                        <BookCheckIcon/> 
                        <span className='ml-2'>Approval</span>
                    </div>
                    <div className='flex ml-4 my-2'> 
                        <ChartNoAxesCombinedIcon/> 
                        <span className='ml-2'>Payment Analytics</span>
                    </div>
                </div>
                {/* component */}
                <div className='m-6'>
                    <div className='opacity-60'>PERFORMANCE MANAGEMENT</div>
                    <div className='flex ml-4'> 
                        <LucideFileChartLine/>
                        <span className='ml-2'>Performance Management</span>
                    </div>
                    <div className='flex ml-4 my-2'> 
                        <Medal/> 
                        <span className='ml-2 '>Performance Update Metrics</span>
                    </div>
                    <div className='flex ml-4 my-2'> 
                        <Medal/> 
                        <span className='ml-2 '>Performance Recognition</span>
                    </div>
                    <div className='flex ml-4 my-2'> 
                        <ChartBar/> 
                        <span className='ml-2 '>Analytics and Monitoring</span>
                    </div>
                    <div className='flex ml-4 my-2'> 
                        <CogIcon/> 
                        <span className='ml-2 '>Settings</span>
                    </div>
                </div>
                {/* component */}
            </div>
        </div>
        <div className='flex-cols relative w-6/7 h-full bg-[#ffffffe2] text-black'>
            <div className='bg-white h-2/13 flex py-5 justify-between items-center text-xl'>
                <div className='flex mx-3 gap-2'>Home <ArrowRight/>Dashboard <ArrowRight/>My Profile</div>
                <div className='flex gap-3 mx-5'> 
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border">
                        <Bell className="h-5 w-5" />
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border opacity-45 bg-[#2c26265b]">
                        PD
                    </div>
                </div>
            </div>
            <div className=' relative h-full pb-5 w-6/7 mt-8 ml-7 flex gap-6 bg-[#ffffff28]'>
                {/* Sub */}
                <div className=' relative w-2/6 h-full px-2 bg-[#ffffffe2]'>
                    <div className='mt-5 ml-5'>
                        <div className='h-30 w-30 mb-4 rounded-2xl '>
                            <img src='/Wisdom_C.jpeg' alt='Profile Pic' className='rounded-3xl'/>
                        </div>
                        <div>
                            <p>PROMISE DANIEL</p>
                            <span>Human Resources Manager</span>
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
                <div className='w-full'>
                    <div className='relative h-auto px-3 flex-row justify-baseline bg-[#ffffffa7]'>
                        <div className='flex justify-between'>
                            <div className='text-blue-900 font-bold text-2xl ml-3 my-3'>MY PROFILE</div>
                            <button className='rounded bg-blue-900 px-4 py-2 text-white my-5'>Edit Profile</button>
                        </div>
                        <div className='text-blue-900 text-lg font-semibold pt-6 pb-2 underline decoration-4 ml-3'>
                            Personal
                        </div>
                </div>
                <div className='flex flex-row'>
                    <ProfileEntries/>
                    <ProfileEntries/>
                </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Dashboard