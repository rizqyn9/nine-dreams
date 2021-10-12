import {useEffect} from 'react';
import {motion} from "framer-motion"

export default function Nav (){
    useEffect(() => {

    }, [])

    return (
        <motion.nav 
            initial={{
                y:"-10vh",
            }}
            animate={{
                y:0,
                transition:{
                    duration:.5,
                }
            }}
            className="nav padding-container"
        >
            <div className="logo">ninedreams</div>
            <div className="menu-container">
                <MenuItem name="home"/>
                <MenuItem name="products"/>
                <MenuItem name="creative communication"/>
                <MenuItem name="about"/>
                <MenuItem name="contact"/>
            </div>
        </motion.nav>
    )
}

function MenuItem(props){
    const {name} = props;
    return (
        <div className="menu">
            {name}
        </div>
    )
}