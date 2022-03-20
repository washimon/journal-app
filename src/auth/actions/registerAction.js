import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useHistory } from 'react-router-dom'
import { auth } from '../../firebase/config'

export const registerAction = ({ firstName, lastName, email, password }) => {
  return async (dispatch) => {
    try {
      /* const user = {
        displayName: `${firstName} ${lastName}`,
        email,
        password,
      }; */
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(user)
    } catch (error) {}
  }
}
