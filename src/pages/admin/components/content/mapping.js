/**
 * 專門 export 此 component 並帶入相關 props 到 此component
 * 主要是在 component 外包一層，專門處理 props
 */
import { connect } from 'react-redux'
import { auth } from '../../../../redux/actions/thunks/admin/admin-actions';
import Admin from './lifycycle';


/* State in redux and props from parent component */
const mapStateToProps = (state, props) => {
    console.log(`The state in redux: `,state)
    console.log(`The props from parent component: `, props)
    return {
        login: state.auth.isLogin,
        correctUserName: state.auth.correctUserName,
        params1: props.params1,
    };
};

/* Actions in redux */
const mapDispatchToProps = { auth }

/**
 * Redux Connection
 */
const AdminContainer = connect(
    /* The state in reducer */
    mapStateToProps,
    /* The function in action */
    mapDispatchToProps,
    // paramsProps
)(Admin);

/**
 * Export Component
 */
export { AdminContainer }

