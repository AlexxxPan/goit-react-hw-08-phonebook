const selectUserName = state => state.auth.user.name;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectToken = state => state.auth.token;
const selectIsRefreshing = state => state.auth.isRefreshing;

const getAuthSelectors = {
  selectUserName,
  selectIsLoggedIn,
  selectToken,
  selectIsRefreshing,
};

export default getAuthSelectors;