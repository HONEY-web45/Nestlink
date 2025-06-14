import clientPromise from "@/lib/mongodb"

export async function POST(request){
const body=await request.json()
// console.log(body);

const client=await clientPromise
const db=client.db("Linknest")
const collection=db.collection("links")
const doc=await collection.findOne({Handle:body.Handle})
if(doc){
    return Response.json({success:false,error:true,message:"handle already exists"})

}

const result=await collection.insertOne({
    "Links":body.Links,
    "pic":body.pic,
   
    "Handle":body.Handle
})
return Response.json({success:true,error:false,message:"added successfully"})

}