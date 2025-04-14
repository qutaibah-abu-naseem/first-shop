import { useEffect } from "react"

const Time=()=>{
  useEffect(()=>{
    fetch("https://api.aladhan.com/v1/timings/22-03-2025?latitude=24.7136&longitude=46.6753&method=2")
  .then(response => response.json())
  .then(data => console.log(data.data.timings))
  },[])
    return(
        <>
        <h1 className="mt-[511px]">time</h1>
        </>
    )
}
export default Time