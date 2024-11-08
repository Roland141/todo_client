import { useState } from 'react'
import './App.css'
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { Login } from './components/Login.jsx';
import { Logout } from './components/Logout.jsx';
import { AddTodo } from './components/AddTodo.jsx';
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
const queryClient = new QueryClient()
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(true)
    return (
      <QueryClientProvider client={queryClient}>
      <div className='app'>
        
        <Header/>
        {isLoggedIn ? 
        <>
          <AddTodo />
          <TodoList/>
          <Logout setIsLoggedIn={setIsLoggedIn}/>
        </>
        
        :
        <Login setIsLoggedIn={setIsLoggedIn}/>}
      </div>
      </QueryClientProvider>
    
  )
}

export default App
