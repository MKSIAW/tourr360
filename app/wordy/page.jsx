
'use client'

import { useEffect, useState } from "react"

// this is now a client component
const Page =  ()=>{
    const [posts, setPosts] = useState([])

    useEffect(()=>{

       const operation = async ()=>{
        const response = await fetch("http://localhost/wordpress/wp-json/wp/v2/posts")
        const data = await response.json()
            return data;
       }

       operation().then(d=>{
        setPosts(d)
        console.log(d[0].title)
       })
    },[])



    return (<div className="grid grid-cols-3 gap-10">
    {
       posts? posts?.map((post, i)=>{
        return <h1 className="text-3xl bg-blue-300 " key={i}>{post.title.rendered}</h1>
    }):'No post available'
    }
    </div>)
}


export default Page