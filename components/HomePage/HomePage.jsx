import {HomePage as data} from "../../data-config"
import React from 'react';
import {motion} from 'framer-motion'
import { ImageReveal } from "../_revealImages.util";
import { RevealTitle } from "../_revealTitle";


export default function HomePage() {
    return(
        <section className="homepage" id="homepage">
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
                                    // variants={container}
                                    transition={{
                                        delayChildren:1,
                                        staggerChildren:.1
                                    }}
                                >
                                    <RevealTitle className="reveal">EXPLORE</RevealTitle>
                                    <RevealTitle className="reveal">THE COLLECTION</RevealTitle>
                                </motion.div>
                            </div>
                            <ImageReveal className="img-home-left zoom" src={data.leftPage.image}/>
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
                            <motion.div className="title-container text-6xl"
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    delay:1,
                                    delayChildren:1,
                                    staggerChildren:.1
                                }}
                            >
                                <RevealTitle className="text-1">DO GOOD WORK</RevealTitle>
                                <RevealTitle className="text-1">FOR GOOD PEOPLE</RevealTitle>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const container ={
    hidden:{

    },
    visible:{

    }
}