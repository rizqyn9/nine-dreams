import {motion} from "framer-motion"


export function ImageReveal(props) {
    const {className, src} = props;

    return (
        <div className="img-container">
            <motion.div className="overlay"
                initial="hidden"
                animate="visible"
                variants={imgRevContainer}
            >
            </motion.div>
            <motion.img src={src} className={className}
                variants={imgRev}
                initial="hidden"
                animate="visible"
            />
        </div>
    )
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
