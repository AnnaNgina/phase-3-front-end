
import './App.css';
import Nav from './components/Nav'
import Slider from './components/Slider'
import Post from './components/Post'
import Footer from './components/Footer'
import Add from './components/Add';
import { useEffect, useState } from 'react';




function App() {
  const [posts, setPosts] = useState ([])
  useEffect(() => {
    fetch("http://localhost:9292/recipes")
    .then((response) => response.json())
    .then((data) =>{
      setPosts(data)
      
    })
  },[]);

  function onDelete(id) {
    fetch(`http://localhost:9292/recipes${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((recipes) => console.log(recipes));
      setPosts((prevPosts) => {
        return prevPosts.filter((item) => {
          return item.id !== id;
        });
      });
  }
  return (
    <div className="App">
    <Nav/>
    <Slider />
    <Post posts={posts} onDelete={onDelete}/>
    <Add/>
    <Footer />
    
    
    </div>
  );
}

export default App;
