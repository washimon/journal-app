import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signOutAction } from '../../auth/actions/signOutAction'
import { Entries } from './Entries'

export const Sidebar = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { displayName } = useSelector(({ auth }) => auth.userLogged)
  const { submitting } = useSelector(({ auth }) => auth)

  const signOut = async () => dispatch(signOutAction())

  const handleSignOut = async () => {
    history.replace('/auth/login')
    const signedOut = await signOut()
    signedOut && history.replace('/auth/login')
  }

  return (
    <aside className="journal__sidebar">
      <div className="header">
        <h3 className="header__brand">
          <i className="fa-regular fa-moon"></i>
          <span>{displayName}</span>
        </h3>
        <button
          onClick={handleSignOut}
          className="header__logout-btn"
          disabled={submitting}
        >
          Cerrar sesión
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
