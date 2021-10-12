import {HomePage as data} from "../../data-config"
import React from 'react';
import {motion} from 'framer-motion'
import { ImageReveal } from "../_revealImages.util";


export default function HomePage() {
    return(
        <section className="homepage">
            <div className="content-container">
                <motion.div className="child-1"
                    initial={{
                        x:"-100%",
                    }}
                    animate={{
                        x:0,
                        transition:{
                            duration:1,
                            type:"spring",
                        }
                    }}
                >
                    <div className="left-content">
                        <div className="content-overflow">
                            <div className="title-container">
                                <motion.div className="text-4xl text-1"
                                    initial="hidden"
                                    animate="visible"
                                    variants={container}
                                    transition={{
                                        delayChildren:1,
                                        staggerChildren:.3
                                    }}
                                >
                                    <motion.div className="reveal"
                                        variants={variantReveal}
                                    >
                                        EXPLORE
                                    </motion.div> 
                                    <motion.div className="reveal"
                                        variants={variantReveal}
                                    >
                                        THE COLLECTION
                                    </motion.div>
                                </motion.div>
                            </div>
                            <ImageReveal className="img-home-left" src={data.leftPage.image}/>
                        </div>
                    </div>
                </motion.div>
                <div className="child-2">
                    <div className="right-content">
                        <div className="content-overflow">
                            <ImageReveal
                                className="img-home-right"
                                src={data.rightPage.image}
                            />
                            <div className="title-container text-6xl">
                                <div className="text-1">
                                    DO GOOD WORK
                                </div>
                                <div className="text-1">
                                    FOR GOOD PEOPLE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const container = {
    hidden: {

    },
    visible: {

    }
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
