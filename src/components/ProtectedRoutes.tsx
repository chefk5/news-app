import { Navigate, Outlet } from 'react-router-dom'

type Props = {
  isLoggedIn: boolean
}

const ProtectedRoutes = ({ isLoggedIn }: Props) => {
  return isLoggedIn == true ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes
