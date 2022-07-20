import React, {useState} from "react";


const CheckBox = (props) => {
    /* Distruct props */
    const { labelOn, labelOff } = props
    /* CheckBox status */
    const [ isChecked, setIsChecked ] = useState(false)

    return (
        <label>
            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
            {
                isChecked? labelOn : labelOff
            }
        </label>
    )
}

export default CheckBox