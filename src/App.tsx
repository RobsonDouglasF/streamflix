import { RouterProvider } from 'react-router'
import './App.css'
import { Router } from './Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
 
  const queryClient = new QueryClient({

  })

  return (
    <QueryClientProvider client={queryClient}> 
    <RouterProvider router={Router} />
    </QueryClientProvider>
  )
}

export default App
