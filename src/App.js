import { useState , useEffect } from 'react';
import './App.css';

function App() {

  const todayNews = [
    "PM Modi flies sortie in Tejas trainer aircraf",
    "Global Leaders Unveil Ambitious Climate Accord, Pledging Drastic Emissions Reductions by 2030",
    "Breakthrough in Medical Research: Promising New Treatment Shows Significant Progress Against Stubborn Disease",
    "Tech Giants Collaborate on Revolutionary AI Initiative to Address Global Challenges.",
    "World Economic Forum Identifies Emerging Markets Set to Drive Global Growth in the Next Decade",
    "Groundbreaking Scientific Discovery Unravels Mysteries of Ancient Civilization",
    "Global Vaccine Rollout Hits Milestone as Countries Join Forces to Tackle Ongoing Health Challenges.",
    "Artificial Intelligence Breakthrough Enhances Everyday Life, Paving the Way for Future Innovations.",
    "International Coalition Launches Bold Initiative to Tackle Plastic Pollution and Preserve Ocean Ecosystems.",
  ]

  const [value , setValue] = useState("")
  const [result, setResult] = useState()
  

  const inputChange = (e) => {
    setValue(e.target.value)
  }  

  const clearAll = () => {
    setValue("")
    setResult()
  }
  
  useEffect(() => {
    if(value.length > 3){
      setTimeout(() => {
        const fetchItems = todayNews.filter((item) => {
          return item.toLowerCase().includes(value.toString().toLowerCase()) 
        });
        setResult(fetchItems)  
      },500)  
    }   
  },[value])

  console.log("result",  result)

  return (
    <div className="App">
      <div>
      <input type='text' onChange={inputChange} value={value}/>
      <button onClick={clearAll}>clear</button>
      </div>
      <div>
        {result && value != "" && result.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
