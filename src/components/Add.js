import React, {useState} from "react";

function Add({onHandleAddPost, setIsFilledIn}){
    const [name, setName]=useState('')
    const [author, setAuthor]=useState('')
    const [ingredients, setIngredients]=useState('')

    function handleSubmit(e){
         e.preventDefault()
        e.target.reset();
        const newObj = {
            "Name":name,
            "Author":author,
            "Ingredients":ingredients,
            
        }
        fetch("http://localhost:9292/recipes", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newObj)
        })
        .then((resp) => resp.json())
        .then((newRecipe) => onHandleAddPost(newRecipe) )
        alert("New Recipe added successfully!");
    }
    return (
        <div className="recipes" style={{margin:"auto", width:'80%', height: 50+"vh", color:"black", backgroundColor:"aquamarine",textAlign:"left"}}>
            <h1 style={{textAlign:"center", marginTop: 50 +"px"}}>Add New Post</h1>
            <form className="new-recipe" onSubmit={handleSubmit}>
            <div className="new-recipe">
                    <label >Name: </label><br></br>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name"  onChange={(e)=>setName(e.target.value)} required/>
                </div><br></br>
            <div className="new-recipe">
                    <label >Author: </label><br></br>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Author"  onChange={(e)=>setAuthor(e.target.value)} required/>
                </div>
                <div>
                    <label for="exampleFormControlInput1" class="form-label">Ingredients:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingredients"  onChange={(e)=>setIngredients(e.target.value)} required/>
                </div>
                
               <button type="submit">Submit New Recipe</button>
            </form>
        </div>
    )
    
}

export default Add;