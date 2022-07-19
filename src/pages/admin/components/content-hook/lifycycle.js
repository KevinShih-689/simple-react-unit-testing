import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import authRducer from "../../../../redux/reducers/admin/auth-reducer";

function useAdmin(props) {
  const [testState, setTestState] = useState(10);

  /* Use useSelector to get the specific state from redux */
  const authState = useSelector(state => state.auth);

  /* Use useDispatch to trigger the reducer in redux */
  const dispatch = useDispatch()
  const { success } = authRducer.actions


  console.log(`In hook component, the state in redux: `, authState)

  return [
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      Here is the hook Admin component.
      <input
        type="button"
        value="Dispatch"
        onClick={() => {
          dispatch(success());
        }}
      />
    </div>,
    testState,
  ];
}

export default useAdmin