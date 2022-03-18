import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Entries } from './Entries'

export const Sidebar = () => {
  const history = useHistory()
  const { displayName } = useSelector(({ auth }) => ({
    displayName: auth.displayName,
  }))
  const handleLogout = () => {
    history.replace('/auth/login')
  }

  return (
    <aside className="journal__sidebar">
      <div className="header">
        <h3 className="header__brand">
          <i className="fa-regular fa-moon"></i>
          <span>{displayName}</span>
        </h3>
        <button onClick={handleLogout} className="header__logout-btn">
          Logout
        </button>
      </div>
      <div className="new-entry">
        <i className="fa-regular fa-calendar-plus"></i>
        <span>New Entry</span>
      </div>
      <Entries />
    </aside>
  )
}
