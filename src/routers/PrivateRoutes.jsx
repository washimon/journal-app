import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const PrivateRoutes = ({ children, userLogged }) => {
  return <>{userLogged?.uid ? children : <Redirect to="/auth/login" />}</>
}
