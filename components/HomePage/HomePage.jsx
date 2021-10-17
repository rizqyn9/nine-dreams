import {HomePage as data} from "../../data-config"
import {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion'
import { ImageReveal } from "../_revealImages.util";
import { RevealTitle } from "../_revealTitle";
import InView, { useInView } from "react-intersection-observer";



export default function HomePage() {
    const anim1 = useAnimation()
    const anim2 = useAnimation()

    const variants = {
        visible: {
            x: 0
        },
        hidden : {
            x: "-100%"
        }
    }
    
    const [Ref1, InView1, Entry1] = useInView({
        threshold: .8
    });
    const [Ref2, InView2, Entry2] = useInView({
        threshold: .5
    });

    useEffect(() => {
        console.log(InView1);
        if(InView1) anim1.start("visible")
        else anim1.start("hidden")
    }, [InView1])

    useEffect(() => {
        console.log(InView2);
        if(InView2) anim2.start("visible")
        else anim2.start("hidden")
    }, [InView2])

    return(
        <section className="homepage" id="homepage">
            <div className="content-container" >
                <motion.div className="child-1"
                    ref={Ref1}
                    variants={variants}
                    initial="hidden"
                    animate={anim1}   
                    transition={{
                        duration:1,
                        type:"spring",
                    }}
                >
                    <div className="left-content">
                        <motion.div className="content-overflow"
                            animate={anim1}
                        >
                            <div className="title-container">
                                <motion.div className="text-4xl text-1"
                                    initial="hidden"
                                    animate={anim1}
                                    variants={container}
                                    transition={{
                                        delayChildren:1,
                                        staggerChildren:.1
                                    }}
                                >
                                    <RevealTitle className="reveal">EXPLORE</RevealTitle>
                                    <RevealTitle className="reveal">THE COLLECTION</RevealTitle>
                                </motion.div>
                            </div>
                            <ImageReveal className="img-home-left zoom" src={data.leftPage.image} inView={InView1}/>
                        </motion.div>
                    </div>
                </motion.div>
                <div className="child-2">
                    <div className="right-content" ref={Ref2}>
                        <div className="content-overflow">
                            <ImageReveal
                                className="img-home-right"
                                src={data.rightPage.image}
                                inView={InView2}
                            />
                            <motion.div className="title-container text-6xl"
                                initial="hidden"
                                animate={anim2}
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