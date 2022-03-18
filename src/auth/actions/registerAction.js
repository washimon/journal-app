export const registerAction = ({ firstName, lastName, email, password }) => {
  return async (dispatch) => {
    try {
      const user = {
        displayName: `${firstName} ${lastName}`,
        email,
        password,
      };
    } catch (error) {}
  };
};
