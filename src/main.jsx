
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HashRouter} from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
   <HashRouter>
    <StoreContextProvider>
    <App />
    </StoreContextProvider>
   </HashRouter>

)
