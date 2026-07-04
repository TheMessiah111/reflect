import Image from "next/image";
const ReflectHero = () => {
  return (
    <div
      className="relative w-full h-screen"
      style={{ backgroundImage: "  url('/Circle.jpg')"  , backgroundSize: "cover" }}
    >
      <Image className=""
      src="/Blackhole.jpg"
      alt=""
      width={500}
      height={500}
      />
    </div>
  )
}

export default ReflectHero;