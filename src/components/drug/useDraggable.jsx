import {useState} from 'react';

const DRAGGABLE = "DRAGGABLE"
const BAR = "BAR"

function draggable(item,id){
    return {
        type: DRAGGABLE,
        id,
        data:item
    }
}
function insertBars(list){
    let i = 0; // ID
    const newBar = ()=>{
        return {
            type: BAR,
            id: i++
        }
    }
    return [newBar()].concat(
        ...list.map(item => {
            return [draggable(item,i++),newBar()]
        })
    )
}
export default function useDraggable(list){
    const [dragList,setDragList] = useState(()=>{
        return insertBars(list)
    }) 
    return {
        dragList
    }
}