import { useEffect, useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config'
import { loginSuccesfully } from '../auth/actions/loginAction'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { JournalRouter } from './JournalRouter'

export const AppRouter = () => {
  const dispatch = useDispatch()
  const [checking, setChecking] = useState(true)
  const userLogged = useSelector(({ auth }) => auth.userLogged)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user?.displayName &&
        dispatch(loginSuccesfully(user.uid, user.displayName || 'Bienvenid@'))
      setChecking(false)
    })
  }, [])

  if (checking) return <h1>Espere...</h1>

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth">
          <PublicRoutes userLogged={userLogged}>
            <AuthRouter />
          </PublicRoutes>
        </Route>
        <Route path="/">
          <PrivateRoutes userLogged={userLogged}>
            <JournalRouter />
          </PrivateRoutes>
        </Route>
        <Redirect to="/auth/login" />
      </Switch>
    </BrowserRouter>
  )
}
