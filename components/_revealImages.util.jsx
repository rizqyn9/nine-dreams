import {motion, useAnimation} from "framer-motion"
import { useEffect } from "react";


export function ImageReveal(props) {
    const anim = useAnimation();
    const {className, src, inView} = props;


    useEffect(() => {
        console.log(`${inView} asdad`);
        if(inView){
            anim.start("visible");
        } else {
            anim.start("hidden");
        }
    }, [inView])

    return (
        <motion.div className="img-container"
            animate={anim}
        >
            <motion.div className="overlay"
                // initial="hidden"
                variants={imgRevContainer}
            >
            </motion.div>
            <motion.figure>
                <motion.img src={src} className={className}
                    variants={imgRev}
                    // initial="hidden"
                />
            </motion.figure>
        </motion.div>
    )
}

const container = {
    hidden: {
        backgorund: "red",
        
    }, 
    visible: {
        x:0,
        backgorund: "red",
    }
}

const imgRevContainer = {
    hidden: {
        x:"100%",
        visibility:"hidden",
    },
    visible: {
        visibility:"visible",
        x:"-120%",
        transition:{
            delay: -.7,
            duration:2,
            ease: "backInOut"
        }
    }
}

const imgRev = {
    hidden: {
        scale: 1.5,
        opacity:0
    },
    visible: {
        opacity:1,
        scale:1,
        transition : {
            delay:1,
            duration:1
        }
    }
}
