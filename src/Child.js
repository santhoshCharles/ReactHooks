import React, {useContext} from "react";
import { ThemeContext } from "./App";

function Child() {
    const theme = useContext(ThemeContext);
    console.log('child')

    console.log('theme', theme)
    return<div/>
}

export default Child;