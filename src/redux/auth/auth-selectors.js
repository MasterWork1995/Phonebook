const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const isGetCurrentUser = state => state.auth.isGetCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  isGetCurrentUser,
};

export default authSelectors;
