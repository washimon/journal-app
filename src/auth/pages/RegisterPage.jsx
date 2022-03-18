import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { registerAction } from '../actions/registerAction';
import { useForm } from '../hooks/useForm';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    formState,
    formErrors,
    handleInputChange,
    handleInputBlur,
    validateForm,
  } = useForm(initialState);
  const { firstName, lastName, email, password, repeatPassword } = formState;

  const register = async (user) => dispatch(registerAction(user));

  const handleRegister = async (e) => {
    e.preventDefault();

    validateForm(formState);
    if (Object.keys(formErrors).length > 0) return;
    console.log('listo para registrar..');
    await register(formState);
    // history.push('/auth/login');
  };

  return (
    <div className="auth__wrapper">
      <h3 className="auth__title">Registro</h3>
      <form onSubmit={handleRegister} className="form">
        <div className="form__group">
          <label htmlFor="register-first-name">Nombres</label>
          <input
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            value={firstName}
            name="firstName"
            id="register-first-name"
            type="text"
            autoComplete="off"
          />
          {formErrors.firstName && (
            <span className="form__error-msg">{formErrors.firstName}</span>
          )}
        </div>
        <div className="form__group">
          <label htmlFor="register-last-name">Apellidos</label>
          <input
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            value={lastName}
            name="lastName"
            id="register-last-name"
            type="text"
            autoComplete="off"
          />
          {formErrors.lastName && (
            <span className="form__error-msg">{formErrors.lastName}</span>
          )}
        </div>
        <div className="form__group">
          <label htmlFor="register-email">Email</label>
          <input
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            value={email}
            name="email"
            id="register-email"
            type="email"
            autoComplete="off"
          />
          {formErrors.email && (
            <span className="form__error-msg">{formErrors.email}</span>
          )}
        </div>
        <div className="form__group">
          <label htmlFor="register-password">Contraseña</label>
          <input
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            value={password}
            name="password"
            id="register-password"
            type="password"
          />
          {formErrors.password && (
            <span className="form__error-msg">{formErrors.password}</span>
          )}
        </div>
        <div className="form__group">
          <label htmlFor="register-repeat-password">Repite contraseña</label>
          <input
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            value={repeatPassword}
            name="repeatPassword"
            id="register-repeat-password"
            type="password"
          />
          {formErrors.repeatPassword && (
            <span className="form__error-msg">{formErrors.repeatPassword}</span>
          )}
        </div>
        <button type="submit">Registrar</button>
        <div className="form__login-link">
          ¿Ya tienes cuenta?
          <Link to="/auth/login"> Inicia sesión</Link>
        </div>
      </form>
    </div>
  );
};
