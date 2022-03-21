import React, {forwardRef, useImperativeHandle} from "react";

const Count =forwardRef((props, ref)=> {
    useImperativeHandle(ref, ()=>({
        consoleFun,
    }))
    const consoleFun = () => console.log('count useImperativeHandle', props.name);
    
    return<h4>Count: {props.count}</h4>
})

export default React.memo(Count);