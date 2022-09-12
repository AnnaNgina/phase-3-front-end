import React, {useEffect, useState }from 'react';


function Posts() {

    const [posts, setPosts] = useState ([])
  useEffect(() => {
    fetch("http://localhost:9292/recipes")
    .then((response) => response.json())
    .then((data) =>{
      setPosts(data)
      console.log(data)
    })
  },[]);
   return (
    <div className='recipe-container'>
        
              { posts.map((post) => (
                <ol id={post.id} key={post.id} >
                <p>Name: {post.name}</p>
                <p>Author: {post.author}</p>
                <p>Ingredients: {post.ingredients}</p>
                <button> Edit</button>
                <button>Delete</button>

                </ol>
                
            ))}
    </div>
    
);

              }
              
export default Posts;