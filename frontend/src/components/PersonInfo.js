import axios from 'axios'
import React,{useState, useEffect} from 'react'

export default function PersonInfo() {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.post("/user/:id")
        .then(res=>{
            setData(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    
    return (
        <div>
          
        </div>
    )
}

