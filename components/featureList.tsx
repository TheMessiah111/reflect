import FeatureComp from "./featurecomp";
import { MousePointerClick, UploadCloud, Network, LucideCalendarDays, 
         SmartphoneIcon, Apple,LockIcon, SearchCodeIcon } from "lucide-react";

const FeatureList = () => {
  return (
    <div className=" grid grid-cols-4 gap 4 w-auto h-auto ml-7">
      <FeatureComp
        featureHeader="Built for Speed"
        featureNote="instantly sync your notes across devices"
        featurelogo={<UploadCloud size={40} color="white" />}
      />
      <FeatureComp
        featureHeader="Built for Speed"
        featureNote="instantly sync your notes across devices"
        featurelogo={<MousePointerClick size={40} color="white" />}
      />
      <FeatureComp
        featureHeader="Built for Speed"
        featureNote="instantly sync your notes across devices"
        featurelogo={<Network size={40} color="white" />}
      />
      <FeatureComp
        featureHeader="Built for Speed"
        featureNote="instantly sync your notes across devices"
        featurelogo={<SearchCodeIcon size={40} color="white" />}
      />
      <FeatureComp
        featureHeader="Built for Speed"
        featureNote="instantly sync your notes across devices"
        featurelogo={<LucideCalendarDays size={40} color="white" />}
      />
      <FeatureComp
        featureHeader="Built for Speed"
        featureNote="instantly sync your notes across devices"
        featurelogo={<LockIcon size={40} color="white" />}
      />
      <FeatureComp
        featureHeader="Built for Speed"
        featureNote="instantly sync your notes across devices"
        featurelogo={<SmartphoneIcon size={40} color="white" />}
      />
      <FeatureComp
        featureHeader="Built for Speed"
        featureNote="instantly sync your notes across devices"
        featurelogo={<Apple size={40} color="white" />}
      />
    </div>
  )
}

export default FeatureList;