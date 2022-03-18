import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import googleLogo from '../../assets/img/google-logo.png';
import { googleLoginAction, loginAction } from '../actions';
import { getErrorsFromForm } from '../helpers';
import { useForm } from '../hooks/useForm';

const initialState = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    formState,
    formErrors,
    handleInputChange,
    handleInputBlur,
    validateForm,
  } = useForm(initialState);
  const { email, password } = formState;

  const login = async (email, password) =>
    dispatch(loginAction(email, password));
  const googleLogin = async () => dispatch(googleLoginAction());

  const handleStartLogin = async (e) => {
    e.preventDefault();

    validateForm(formState);
    const currentErrors = getErrorsFromForm(formState, formErrors);
    if (Object.keys(currentErrors).length > 0) return;
    // console.log('listo para loguear');
    await login(email, password);
    // history.replace('/');
  };

  const handleStartLoginWithGoogle = async () => {
    try {
      await googleLogin();
      history.replace('/');
    } catch (error) {}
  };

  return (
    <div className="auth__wrapper">
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleStartLogin} className="form">
        <div className="form__group">
          <label htmlFor="login-email">Email</label>
          <input
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            value={email}
            name="email"
            id="login-email"
            type="text"
            autoComplete="off"
          />
          {formErrors.email && (
            <span className="form__error-msg">{formErrors.email}</span>
          )}
        </div>
        <div className="form__group">
          <label htmlFor="login-password">Password</label>
          <input
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            value={password}
            name="password"
            id="login-password"
            type="password"
          />
          {formErrors.password && (
            <span className="form__error-msg">{formErrors.password}</span>
          )}
        </div>
        <button>Iniciar sesión</button>
        <div className="google-link">
          <div className="google-link__icon-wrapper">
            <img
              className="google-link__icon"
              src={googleLogo}
              alt="Google logo"
            />
          </div>
          <p onClick={handleStartLoginWithGoogle} className="google-link__text">
            <b>Sign in with google</b>
          </p>
        </div>
        <div className="form__new-account-link">
          ¿Todavía no tienes cuenta?
          <Link to="/auth/registro"> Crea una nueva</Link>
        </div>
      </form>
    </div>
  );
};
