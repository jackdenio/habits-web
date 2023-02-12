import { Habit } from "./assets/components/Habit";
import './styles/global.css';

function App() {
  

  return (
    <div className="bg-slate-800">
      <Habit completed={8} />
      <Habit completed={10} />      
    </div>
  )
}

export default App
