import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"

export default async function Page({ params }) {
  const handle = (await params).handle
  const client=await clientPromise
const db=client.db("Linknest")
const collection=db.collection("links")
const item=await collection.findOne({Handle:handle})
if (!item) {
 notFound()
}
   



   
    return (<div className=" bg-gradient-to-br from-indigo-800 from-10% via-purple-800 via-30% to-teal-700 to-90%  min-h-screen flex flex-col items-center gap-4   text-white py-20 ">
        <div className="pic flex flex-col gap-5">

        <img src={item.pic} alt="Enter the correct URL"  className="h-[100px] w-[100px]  rounded-xl text-lg font-bold" />
        <div className="text-center font-bold  text-xl">{item.Handle}</div>
        </div>
        <div className="links flex flex-col gap-4">
         {item.Links.map((item,i)=>{
            return(<div key={i}>
               
             
             {!item.link.includes("https://") && <Link href={"https:" +item.link } target="_blank"  >
              <div className="bg-fuchsia-100 text-slate-700 p-5 rounded-lg text-center px-16 text-lg font-semibold" key={i} >{item.linktext}</div>
             </Link>}
             {item.link.includes("https://") && <Link href={ item.link } target="_blank"  >
              <div className="bg-fuchsia-100 text-slate-700 p-5 rounded-lg text-center px-16 text-lg font-semibold" key={i} >{item.linktext}</div>
             </Link>}
             
                
</div>
            )
         })}
      <div className="text-lg font-semibold text-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 hover:bg-gradient-to-bl p-2 rounded-full flex justify-center">  <Link rel="stylesheet" href="/" > <button>Go To Home</button> </Link>
        </div>
        </div>
        </div>)
  }

