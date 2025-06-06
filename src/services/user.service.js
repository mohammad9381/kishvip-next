export const setLogin = (user) => {
  localStorage.setItem("token", user.token);
  localStorage.setItem("user_data", JSON.stringify(user));
};

export const isAuthenticaded = () => {
  const token = localStorage.getItem("token");
  if (token) return true;
  return false;
};

export const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user_data");
};

export const getUserData = () => {
  try {
    const userD = localStorage.getItem("user_data");
    const user = JSON.parse(userD);
    return user;
  } catch (err) {
    console.log(err);
    return null;
  }
};
