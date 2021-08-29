export default async function ({ redirect, app, store }) {
  if (store.getters.user) {
    return;
  }

  await app.$fire.auth.onAuthStateChanged((loginUser) => {
    if(loginUser) {
      store.dispatch('setUser', loginUser);
    } else {
      return redirect ('/login')
    }
  });
}
