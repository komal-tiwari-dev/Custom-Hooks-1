import { useState } from "react";
import "./App.css";
import useFetch from "./Hooks/useFetch";
import useTimeout from "./Hooks/useTimeout";
function App() {
  const ready1 = useTimeout(2000);
  const ready2 = useTimeout(3000);
  const ready3 = useTimeout(5000);

  const [query,setQuery]=useState("")
  const {data,loading,error}=useFetch(`https://api.github.com/search/users?q=${query || "masai"}`)

  return (
    <div className="App">
      <div>
        <h1>Timer by useTimeout custom Hook</h1>
        {ready1 ? "First Ready" : "First Not Ready"}
        <br />
        {ready2 ? "Second Ready" : "Second Not Ready"}
        <br />
        {ready3 ? "Third Ready" : "Third Not Ready"}
      </div>

      <div style={{width:"300px",textAlign:"left", margin:'auto', border:"3px solid black",borderRadius:"10px"}}>
        <h1>Fetch User Data</h1>
        <input style={{fontSize:"20px", width:"293px",height:"25px"}} placeholder="Enter Github user name" type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <br/>
        {loading && "Loading...."}
        <br/>
        {data.length > 0 &&  data.map((el)=>{
          return <div style={{border:"1px solid green",paddingLeft:"20px", marginTop:"5px"}} key={el.id}>{el.login}</div>
        })}
      </div>
    </div>
  );
}

export default App;
