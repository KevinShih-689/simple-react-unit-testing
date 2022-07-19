/**
 * The middleware in React. It's necessary for large project.
 * You can do:
    * Write your logic or fetching API here to handle multiple dispatch.
    * Get the current state in redux.
 */
import authRducer from "../../../reducers/admin/auth-reducer";

const { success, fail, setUsername } = authRducer.actions;

const auth = (username) => (dispatch, state) => {
    console.log(` The function in actions and current state is:  `,state().auth)
    console.log(`The params in auth function: `, username)
    // if (username === state().auth.correctUsername) {
        dispatch(success());
    // }
};


export { auth }



