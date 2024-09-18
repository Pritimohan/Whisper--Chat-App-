import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
// import { Routers } from './routes/Routers.jsx'
import { Home, LogIn, SingnUp } from './pages/pages.jsx'

const jwtToken = JSON.parse(localStorage.getItem("jwtToken"));
// console.log(user);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: jwtToken ? <Home /> : <Navigate to="login" />
      },
      {
        path: "login",
        element: <LogIn />
      },
      {
        path: "signup",
        element: <SingnUp />
      }
    ]
  },
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
