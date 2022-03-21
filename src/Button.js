import React, {useMemo} from "react";

function Button(props){
    console.log('button', props.name)
    return<button onClick={props.onClick} >{props.name}</button>
}

export default React.memo(Button);