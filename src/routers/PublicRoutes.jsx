import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const PublicRoutes = ({ children, userLogged }) => {
  return <>{userLogged?.uid ? <Redirect to="/" /> : children}</>
}
