import{motion} from 'framer-motion'
import { useState } from 'react';
function Cards() {
    const{color, setcolor} =  useState('')
    return ( <>
    <motion.div 


    whileHover={{scale: [null, 1.1,null] }}
    transition={{ duration:'0.3', ease:'easeOut'}}
    className="Card"> 
    <div style={{
        padding:"10px",
        }}>
        <p style={{
            textAlign:'start',
            padding:'0.5vw',
            marginLeft:'1vw',
            fontSize:'17px'
        }}>place</p>
    <h2>title project</h2>
    <h3>cluster</h3>
    <img style={{
        height:'150px'
    }} src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2015/12/09112429/work-life-balance-working-from-home-1024x513.jpg" alt="" />
    <p>description</p>
    <button> vote</button>
    </div>
    </motion.div>

    </> );
}

export default Cards;