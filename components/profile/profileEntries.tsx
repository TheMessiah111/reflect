import React from 'react'
interface ProfileEntryProps{
  header: string;
  body: string;
}
const ProfileEntries = ({header,body}: ProfileEntryProps) => {
  return (
    <div className='grid-cols-3 ml-4 mt-2 md-4 mr-8 p-2 '>
      <h3 className='text-gray-600 text-xs'>{header}</h3>
      <p className='text-[#000000] text-sm font-strong'>{body}</p>
    </div>
  )
}

export default ProfileEntries