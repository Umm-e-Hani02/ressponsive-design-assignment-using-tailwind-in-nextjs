import Navbar from "./Navbar";
export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center md:flex-wrap lg:flex-nowrap justify-center lg:flex-row">
      <div className="bg-rose-500 text-center h-[160px] lg:h-80 lg:flex-1 p-1 w-full">Never Give Up</div>
      <div className="flex flex-col md:flex-row w-full lg:w-1/3">
      <div className="bg-pink-500 text-center h-40 lg:h-80 p-1 md:w-full">Never Give Up</div>
      <div className="bg-emerald-500 text-center h-40 lg:h-80 p-1 md:w-full">Never Give Up</div>
      </div>
    </div>
    </>
  );
}

