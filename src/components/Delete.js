import React from "react";

function Delete({recipes, onDelete}){
    function handleDeleteClick() {
        fetch(`http://localhost:9292/recipes${recipes.id}`, {
          method: "DELETE",
        })
          .then((resp) => resp.json())
          .then(() => onDelete(recipes));
      }
    
      
      return (
        <div className='rev'>
          <div>
          <span className='body'>{recipes.body}</span>
          </div>
          <div>
          <button onClick={handleDeleteClick} className="del">Delete</button>
        </div>
        </div>
      )
    }
    
    export default Delete
