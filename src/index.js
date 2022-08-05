import React from 'react'
import ReactDOM from 'react-dom/client'
import FilterPage from './pages/filterPage'
import './assets/styles/reset.css'
import 'antd/dist/antd.min.css'
import './index.css'
import './assets/styles/tailwindOutput.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <FilterPage/>
  </React.StrictMode>
)

