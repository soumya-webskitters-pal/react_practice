
import React from "react"
function List(){
    const item = [
        "item1",
        "item2",
        "item3",
        "item4"
    ]
    return (
        <>
            <h2>list title</h2>
            <ul className="list-group">
            {/* {item.length===0 ? <p>no data found</p>: null} */}
            {item.length === 0 && <p>no data found</p>}
            {item.map((el,i)=> <li key={i} className="list-group-item">list have, {el}</li>)}
            </ul>
        </>
    )
}

export default List;