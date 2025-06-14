"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
const page = () => {
 const search=useSearchParams()
  const [links, setlinks] = useState([{ link: "", linktext: "" }])
  const [pic, setpic] = useState("")

  const [handle, sethandle] = useState(search.get("handle") || "")

const router=useRouter()
const changelinks=(index,link,linktext)=>{

setlinks((initial)=>{
 return initial.map((item,i)=>{
if(i==index){
  return{link,linktext}
}
else{
  return item
} 
  })
})
}
  const changehandle = (e) => {
    sethandle(e.target.value)
  }
  
  const changepic = (e) => {
    setpic(e.target.value)
  }
 
const add=()=>{
  setlinks(links.concat([{link:"",linktext:""}]))
}

  const create = async (link) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ 
      "Links": links,
      

      "Handle": handle,
      "pic": pic
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const a = await fetch("http://localhost:3000/api/generate", requestOptions)
    const b = await a.json()
    if(b.success){
    toast.success(b.message)
  await  router.push(`/${handle}`)
    setpic("")
  setlinks([{ link: "", linktext: "" }])
    sethandle("")
}
    else{
      toast.error(b.message)
    }

  }
useEffect(() => {
  document.title="Generate--Linknest"

 
}, [])


  return (
    <div>

      <ToastContainer />
      <section className='bg-gradient-to-br from-fuchsia-950 via-fuchsia-100 to-gray-400  flex   py-[25vh]  flex-col  items-center  min-h-screen px-20'>
        
          <h1 className='font-bold text-5xl text-center'>Create Your Linknest</h1>


          <div className='w-full mt-10 flex flex-col items-center gap-5 '>
            <h2 className='text-xl font-medium text-center'>Step 1: Claim your Handle</h2>
            <input type="text" placeholder='Choose a Handle' onChange={changehandle} value={handle} className=' px-6 py-3  rounded-full  focus:outline-gray-400' />
          </div>

  <div className='w-full mt-10 flex flex-col items-center gap-5'>
  <h2 className='text-xl font-medium text-center'>Step 2: Add Links</h2>
  
{ links.map((item,index)=>{
  return(
    <div key={index}>

  <div key={index} className='flex flex-row coll py-3 gap-4 justify-center'>
  <input type="text" placeholder='Enter Link text' className='px-6 py-3 rounded-3xl  focus:outline-gray-400' value={item.linktext } onChange={e=>changelinks(index,item.link,e.target.value)} />
  <input type="text" placeholder='Enter Link' className='px-6 py-3 rounded-3xl  focus:outline-gray-400' value={item.link } onChange={e=>changelinks(index,e.target.value,item.linktext)} />
  
  </div>
  <hr className='h-[2px] bg-gray-400 flex w-full mx-0'/>
  </div>

)
})}
</div>
         

          <button className='disabled:bg-gray-400 w-fit px-6 py-2 m-3 rounded-full bg-slate-700 text-white font-bold'onClick={add} disabled={links[links.length-1].link.length<8 || links[links.length-1].linktext.length<3} >+ Add Link</button>



          <div className='w-full mt-10 flex flex-col items-center gap-5 '>
            <h2 className='text-xl font-medium text-center'>Step 3: Add Picture and Finalize</h2>
            <input type="text" value={pic} placeholder='Enter Link to your Picture' className='sm:w-8/12 py-3 px-6  rounded-full  focus:outline-gray-400 ml-3' onChange={changepic} required />
           <button className='w-fit disabled:bg-gray-400  pd p-3 px-5 block mx-auto rounded-full font-bold bg-slate-700 text-white' onClick={create} disabled={pic.length<30}>Create  LinkNest</button>



          
        </div>
        
      </section>
    </div>
  )
}

export default page

