import { useState } from "react"
import Lists from "./ListItems"

export default function Display(prop){
    let someStyle ={
           width: "600px",
           position:"absolute",
           left: "30%",
           top: "10%",
        //    boxShadow: "0px 0px 5px 2px gray",
           borderRadius: "10px"
    }
    
    let [inputValue, updateInput] = useState("")
    const[myid,setMyid]=useState(3)
    let [ListItem,updateListIem] =useState([
        {
           Labelid:"flexCheckDefault1",
           task: "Learn ReactJS",
           id:1
        },
        {
            Labelid:"flexCheckDefault2",
            task: "Learn Boostrap-5",
            id:2
         },
     
    ])
    let newid = ListItem.length+1;
     function addTodo(){
        if(inputValue ===""){
            alert("Please add task.....")
        }
        else{
            let newtodo =[
                ...ListItem,
                {
                    Labelid: "formCheckDefault" + newid,
                    task: inputValue,
                    id:myid
                }
            ]
            updateListIem(newtodo)
            updateInput("")
            setMyid(myid+1)
           // ListItem.forEach(x=>{console.log(x.id)})
        }

     }

    function deletetodo(id){
        const filtereddata=ListItem.filter((x)=>x.id!=id)
        updateListIem(filtereddata)
    }
     
    return(
        <>
        <div className="row shadow" style={someStyle}>
            <h2 className="text-success text-center pt-2">TODO LIST APP</h2>
            <div className="input-group d-flex justify-content-center py-3">
            <input className="textValue input-group-text form-control"
            onChange={(e)=>{
                return(
                     updateInput(e.target.value)
                )
            }}
             type="text" placeholder="Enter some task" value={inputValue}/>
            <button className="btn btn-outline-success" 
            onClick={()=>{
                return(
                  addTodo()
                )
            }}
            >ADD TASK</button>
            </div>
            <Lists prop={ListItem} deleteFun={deletetodo}></Lists>
        </div>
        </>
    )
}