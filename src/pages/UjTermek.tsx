import { useState } from "react";
import {  useNavigate } from "react-router";


function UjTermek() {
    const [title, setTitle] = useState("");
    const Navigate = useNavigate();

    function handlesubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert(`A termék neve: ${title}`);
        Navigate("/admin");
    }


  return (
   <div>
    <h1>Új termék oldal</h1>
    <form onSubmit={handlesubmit}>
        <label htmlFor="title">Termék neve:</label>
        <input id="title"  value={title} onChange={(e) => setTitle(e.target.value)} 
        required/>
        <button type="submit">mentés</button>
    </form>
   </div>
  )
}

export default UjTermek