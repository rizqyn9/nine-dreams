import {HomePage as data} from "../../data-config"
import React from 'react';
import {motion} from 'framer-motion'

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
                            <div
                            className="img-container">
                                <motion.div className="overlay"
                                    initial={{
                                        x:"100%",
                                        visibility:"hidden",
                                    }}
                                    animate={{
                                        visibility:"visible",
                                        x:"-120%",
                                        transition:{
                                            delay: -.7,
                                            duration:2,
                                            ease: "backInOut"
                                        }
                                    }}
                                    >
                                </motion.div>
                                <motion.img alt="" className="img-home-left"
                                    initial={{
                                        scale: 1.5,
                                        opacity:0
                                    }}
                                    animate={{
                                        opacity:1,
                                        scale:1,
                                        transition : {
                                            delay:1,
                                            duration:1
                                        }
                                    }}
                                    src={data.leftPage.image}/>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className="child-2">
                    <div className="right-content">
                        <div className="content-overflow">
                            <div className="img-container">
                                <img src={data.rightPage.image} alt="" />
                            </div>
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

function Box(){
    return(
        <div className="box">
        </div>
    )
}
