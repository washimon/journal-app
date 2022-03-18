import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { JournalPage } from '../journal/pages/JournalPage'
import { JournalRouter } from './JournalRouter'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={AuthRouter} />
        <Route path="/" component={JournalRouter} />
        <Redirect to="/auth/login" />
      </Switch>
    </BrowserRouter>
  )
}
