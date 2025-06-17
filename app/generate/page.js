"use client"
import { Suspense} from 'react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import Input from '@/components/Input'


const page = () => {

  const [handle, setHandle] = useState("");
  const router=useRouter()
  const [links, setlinks] = useState([{ link: "", linktext: "" }])
  const [pic, setpic] = useState("")
  




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

    const a = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/generate`, requestOptions)
    const b = await a.json()
    if(b.success){
    toast.success(b.message)
  await  router.push(`/${handle}`)
    setpic("")
  setlinks([{ link: "", linktext: "" }])
    setHandle("")
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
      <section className='bg-gradient-to-br from-gray-600 via-fuchsia-50 to-gray-700  flex   py-[25vh]  flex-col  items-center  min-h-screen px-20'>
        
          <h1 className='font-bold text-5xl text-center'>Create Your Linknest</h1>


          <div className='w-full mt-10 flex flex-col items-center gap-5 '>
            <h2 className='text-xl font-medium text-center'>Step 1: Claim your Handle</h2>
            <Suspense fallback={<div>Loading feed...</div>}>
<Input handle={handle} setHandle={setHandle} />
         
            </Suspense>
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
         

          <button className='disabled:bg-gray-400 w-fit px-6 py-2 m-3 rounded-full bg-slate-700 text-white font-bold'onClick={add} disabled={links[links.length-1].link.length<8 || links[links.length-1].linktext.length<2} >+ Add Link</button>



          <div className='w-full mt-10 flex flex-col items-center gap-5 '>
            <h2 className='text-xl font-medium text-center'>Step 3: Add Picture and Finalize</h2>
            <input type="text" value={pic} placeholder='Enter Link to your Picture' className='sm:w-8/12 py-3 px-6  rounded-full  focus:outline-gray-400 ml-3' onChange={changepic} required />
           <button className='w-fit disabled:bg-gray-400  pd p-3 px-5 block mx-auto rounded-full font-bold bg-slate-700 text-white' onClick={create} disabled={pic.length<30 || links[links.length-1].link.length<8 || links[links.length-1].linktext.length<2}>Create  LinkNest</button>



          
        </div>
        
      </section>
    </div>
  )
}

export default page

