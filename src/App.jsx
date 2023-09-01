import {AiOutlinePlus} from 'react-icons/ai';

const App = () => {
  return (
    <div className="h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]">
      <h1 className="text-4xl font-bold">Todo App</h1>
      <form action="">
        <input type="text" placeholder="Add Todo" />
        <button><AiOutlinePlus size={30}/></button>
      </form>
    </div>
  )
}

export default App