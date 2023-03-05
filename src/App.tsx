//import { Habit } from "./assets/components/Habit";
import './styles/global.css';
import logoImage from './assets/logo.svg'
import { Plus } from 'phosphor-react'

export function App() {
  

  return (
    <div className="w-screen h-screen flex justify-center items-center max-sm:items-start max-sm:mt-16">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <div className="w-full max-w-3xl mx-auto flex  items-center justify-between max-sm:flex-col max-sm:gap-5 ">
          <img src={logoImage} alt="Habits"></img>
          <button
            type="button"
            className="border border-yellow5 font-semibold rounded-lg px-6 py-2 flex items-center gap-3 hover:border-yellow2"
          >
            <Plus size={20} className="text-yellow5"></Plus>
            Novo Hábito
          </button>
        </div>

      </div>
    </div>
  )
}
