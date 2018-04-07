const authDefaultState = {
    isAuthenticated: false,
    user: {}
};

export default (state = authDefaultState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};