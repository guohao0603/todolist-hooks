import React,{} from 'react'

function Test(props){
    const {title,changeTitle} = props;
    return (
        <>
            <p>{title}</p>
            <button onClick={()=>{changeTitle('修改后的标题')}}>更改标题</button>
        </>
    )
    
}

export default Test;