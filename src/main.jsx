import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authroutes from './routes/AuthRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <Authroutes />
)
