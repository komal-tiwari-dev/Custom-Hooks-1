import { useEffect, useState } from "react"
import axios from 'axios'

const useFetch=(url)=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)

    const fetchData=()=>{
        axios.get(url)
        .then((res)=>{
            console.log(res)
            setData(res.data.items)
            setLoading(false)
        })
        .catch((err)=>{
            setError(true)
            setLoading(false)
        })
    }
    useEffect(()=>{
        fetchData()
    },[url])

    return{
        data,
        loading,
        error
    }
}

export default useFetch;