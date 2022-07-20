import React, {useState} from "react";
import { USER_LIST } from "../mock_data/"

/**
 * Get Custom List from mock data.
 * @function getCustomList
 * @returns {UserList}
 */
const getCustomList = async () => {
    /* Data Transform */
    return USER_LIST
}

/**
 * Simple sum function
 * @param {Number} number1 - The first number
 * @param {Number} number2 - The second number
 * @returns {Sum} 
 */
const sumNumber = (number1, number2) => {
    let sum = number1 + number2

    return sum;
}


export { 
    getCustomList,
    sumNumber
}