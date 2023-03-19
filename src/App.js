import './App.css';
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <div className="card-section">
        <Card 
        pic="../Images/image 12.png" 
        sat1="../Images/Star 1.png" 
        stat2="5.0 (6).USA" 
        activity="Life lessons with Katie Zaferes" 
        price="From $136 / person"/>

        <Card pic="../Images/wedding.jpg" 
        sat1="../Images/Star 1.png" 
        stat2="5.0 (6).USA" 
        activity="Learn wedding photography" 
        price="From $125 / person"/>

        <Card pic="../Images/mountain.jpg" 
        sat1="../Images/Star 1.png" 
        stat2="5.0 (6).USA" 
        activity="Group Mountain Biking" 
        price="From $50 / person"/>
      </div>
    
      
    </div>
  );
}

export default App;
