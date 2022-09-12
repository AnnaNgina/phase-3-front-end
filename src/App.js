
import './App.css';
import Nav from './components/Nav'
import Slider from './components/Slider'
import Post from './components/Post'
import Footer from './components/Footer'
import Add from './components/Add';



function App() {
  return (
    <div className="App">
    <Nav/>
    <Slider />
    <Post />
    <Add/>
    <Footer />
    
    </div>
  );
}

export default App;
