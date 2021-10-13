import {motion} from 'framer-motion';

export function RevealTitle(props) {
    const {children, className} = props;

    return (
        <motion.div className={`reveal ${className}`}
            variants={variantReveal}
        >
            {children}
        </motion.div>
    )
}

const variantReveal = {
    hidden : {
        opacity:0,
        y:"5vh"
    },
    visible : {
        y:"0",
        opacity:1,
        transition:{
            duration:1,
        }
    }
}
