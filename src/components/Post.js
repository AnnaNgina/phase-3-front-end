import React, {useEffect, useState }from 'react';


function Posts({posts,onDelete}) {
function handleDelete(){
onDelete(posts.id)
}

   return (
    <div className='recipe-container'>
        
              { posts.map((post) => (
                <ol id={post.id} key={post.id} >
                <p>Name: {post.name}</p>
                <p>Author: {post.author}</p>
                <p>Ingredients: {post.ingredients}</p>
                <button> Edit</button>
                <button onClick={handleDelete}>Delete</button>

                </ol>
                
            ))}
    </div>
    
);

              }
              
export default Posts;