import React from "react";

function Delete(){
    function handleDeleteClick(id) {
        fetch(`http://localhost:9292/recipes${id}`, {
          method: "DELETE",
        })
          .then((resp) => resp.json())
          .then(() => console.log(recipes));
          
      }
    
      
      return (
        <div className='rev'>
          <div>
          <span className='body'>{recipes.body}</span>
          </div>
          <div>
          <button onClick={()=>handleDeleteClick(recipes.id)} className="del">Delete</button>
        </div>
        </div>
      )
    }
    
    export default Delete;
