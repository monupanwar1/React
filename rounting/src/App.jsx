import Nav from './components/Nav'
import Routing from './utils/Routings'


const App = () => {
  return (
    <div className='h-screen w-full m-auto bg-zinc-500 p-10'> 
      <Nav />
      <Routing/>
   
    </div>
  )
}

export default App
