import React from "react";

function Delete(){
   
    
      
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
