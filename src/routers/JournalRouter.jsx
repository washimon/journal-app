import { Redirect, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { JournalPage } from '../journal/pages/JournalPage'
import { NotePage } from '../journal/pages/NotePage'
import { Sidebar } from '../shared/components/Sidebar'

export const JournalRouter = () => {
  return (
    <div className="journal__main">
      <Sidebar />
      <main className="journal__main-content">
        <Switch>
          <Route exact path="/" component={JournalPage} />
          <Route exact path="/note" component={NotePage} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  )
}
