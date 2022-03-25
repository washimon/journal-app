import { Route, Switch, Redirect } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { RegisterPage } from '../auth/pages/RegisterPage'

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <Switch>
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/auth/registro" component={RegisterPage} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  )
}
