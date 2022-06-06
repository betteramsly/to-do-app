import React, { useContext } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { AuthContext } from "../context/context"
import { publicRoutes, privateRoutes } from "../router/routes"
import Loader from "./UI/loader/Loader"

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <Loader/>
  } 

  return (
    isAuth 
    ? 
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="*" element={<Navigate to="/posts" replace />} />
    </Routes>
    :
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
    
    
    
  )
}

export default AppRouter
