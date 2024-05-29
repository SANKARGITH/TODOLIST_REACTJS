
export default function Lists(props){

    return(
        <>
        { props.prop.map((e,i)=>{
            return(
             <ul className="list-group p-2"  key={i}>
             <li className="list-group-item">
             <input className="form-check-input" type="checkbox" value="" id={e.Labelid} name={e.Labelid}/>
             <label className="form-check-label ps-2" htmlFor={e.Labelid}>
                {e.task}
             </label>
             <span className="float float-end shadow-sm"><button className="btn btn-sm btn-outline-warning"
             onClick={()=>{
                props.deleteFun(e.id)
             }}
             >✖️</button></span>
           </li>
      </ul>)
         })
        }
        </>
    )
}