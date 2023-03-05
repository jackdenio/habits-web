interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps) {
  return (
    <p className="bg-slate-400 w-10 h-10 rounded m-2 flex items-center align-top justify-center">{props.completed}</p>
  )
}