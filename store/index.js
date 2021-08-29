// initial state
export const state = () => ({
  user: null
});

// getters
export const getters = {
  user(state) {
    return state.user;
  },
};

// actions
export const actions = {
  setUser({ commit }, user) {
    commit('saveUser', user);
  },
  logout({ commit }) {
    commit('deleteUser')
  }
};

// mutations
export const mutations = {
  saveUser(state, user) {
    state.user = {
      email: user.email
    };
  },
  deleteUser(state) {
    state.user = null
  }
};
