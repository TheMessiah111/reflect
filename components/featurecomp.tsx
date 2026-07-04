interface FeatureCompProps {
  featurelogo: React.ReactNode
  featureHeader: string
  featureNote: string
}

const FeatureComp = ({ featurelogo, featureHeader, featureNote }: FeatureCompProps) => {
  return (
    <div className="mt-5 p-5" >
        <div >
            {featurelogo}
        </div>
        <div className="font-bold text-xl">
            {featureHeader}
        </div>
        <div>
            {featureNote}
        </div>
    </div>
  )
}

export default FeatureComp