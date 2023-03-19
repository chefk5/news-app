import NavigationHeader from 'components/NavigationHeader'
import ProtectedRoutes from 'components/ProtectedRoutes'
import { Login, Main, Profile, Story } from 'pages'
import { Routes, Route } from 'react-router-dom'
import { RootState } from 'redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
function App() {
  const isLoggedIn = useSelector(
    (state: RootState) => state.newsReducer.isLoggedIn
  )

  return (
    <>
      {isLoggedIn && <NavigationHeader />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
          <Route path="/main" element={<Main />} />
          <Route path="/story" element={<Story />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
