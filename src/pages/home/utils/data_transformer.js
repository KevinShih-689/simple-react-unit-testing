import React, {useState} from "react";
import { USER_LIST } from "../mock_data/"

const getCustomList = async () => {
    /* Data Transform */
    return USER_LIST
}

export { 
    getCustomList
}