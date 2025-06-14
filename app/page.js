"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const router=useRouter()
  const [name, setname] = useState("")
  const [name1, setname1] = useState("")
const claim=()=>{
router.push(`/generate?handle=${name  }`)
}
const view=()=>{
router.push(`/${name1  }`)
}
const namechange=(e)=>{
  setname(e.target.value)
}
const namechange1=(e)=>{
  setname1(e.target.value)
}
// bg-[#254f1a]
  return (
  <main>

    <section className="bg-gradient-to-r from-stone-900 via-stone-500 to-stone-800 min-h-screen grid md:grid-cols-2">
<div className=" mar mx-16 md:ml-24 flex flex-col  justify-center gap-6 mt-36 ">
  <div className="text-zinc-400 flex flex-col items-end justify-center   gap-6">

  <p className="font-bold text-center  text-5xl lg:text-7xl">Everything you are. In one, simple link in bio.</p>
  <p className=" text-base text-center lg:text-lg">Join 50M+ people using Linknest for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
  </div>
<div className="btn space-x-2 p-3 flex flex-col gap-3 items-center  text-black ">
  <input type="text" placeholder="linkne.st/yourname " value={name} className="focus:outline-green-500 p-5 w-full md:w-auto rounded-lg" onChange={namechange} />
  <button className="bg-fuchsia-200 px-7 py-5 rounded-full" onClick={claim}>Claim your Linknest</button>
</div>
</div>
<div className=" justify-center  hidden md:flex pt-40 py-3 pr-4 ">
  <img src="/shiv.jpg" alt="fixing image" className="object-fill  rounded-3xl  hover:animate-ping " />
</div>
    </section>


    <section className=" bg-gradient-to-b from-gray-900 via-slate-400 to-gray-900 min-h-screen grid md:grid-cols-2">
<div className="flex flex-col my-10 gap-20 ">
  <div>

  <h1 className="text-5xl font-bold fnt leading-tight text-slate-300 px-10 md:px-0 text-center">View your Existing Linknest</h1>
  <p className="text-white text-center px-10 pt-10 text-lg font-semibold ">Enter your Linknest handle to view your existing linknest</p>
  
</div>

    <div className="btn space-x-2 p0 p-3 text-black flex flex-col items-center gap-5 px-20  ">
  <input type="text" placeholder="linkne.st/yourname " value={name1} className="focus:outline-green-500 w-full p-5 rounded-lg" onChange={namechange1} />
  <button className="bg-fuchsia-200 w-fit px-7  py-5 rounded-full" onClick={view}>View your Linknest</button>
</div>
  </div>
<div className="min-h-screen md:block hidden w-full">
  <img src="pro.webp" alt="" className="w-full h-[100vh] rounded-xl " />
</div>

    </section>


    
  </main>
  );
}
