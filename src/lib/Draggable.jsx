import React, { useEffect, useRef } from 'react';
import "./Draggable.css";

function Draggable ({chidren, handleRef, onMove, x, y}) {
        const dragRef = useRef(null)


        useEffect(()=>{
            const handle = handleRef.current;
            handle.addEventListener("mousedown", onMouseDown)


        })
    return (
        <div ref={dragRef} className='draggable' style={{transform:`tranlate(${0}px, ${0}px)`}}>
            {chidren}
        </div>
    )
}

export default Draggable;