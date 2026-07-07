import { AlertOctagonIcon, File} from "lucide-react"
import Link from "next/link";
interface ProfileCardProps{
    name:string;
    // icon: React.ReactNode;
    status: number;
}
import React from 'react'


const Profilecard = ({name, status}:ProfileCardProps) => {
    if(status == 1){
        return(
            
            <Link href={"/"+ name} className="flex my-1 mx-2 text-sm py-2 rounded-xl hover:bg-[#5585bb92] active:bg-[#5585bb92]">
             <div className="mx-3 "><File color='green'/></div>
             <div>{name}</div>
            </Link>
        )
    }
    else if(status == 0){
            return(
               <Link href={"/"+ name} className="flex my-1 mx-2 text-sm py-2 rounded-xl hover:bg-[#5585bb92] active:hover:bg-[#5585bb92]">
             <div className="mx-3 "><AlertOctagonIcon color='red'/></div>
             <div>{name}</div>
            </Link>
            )
    }
  
}

export default Profilecard;