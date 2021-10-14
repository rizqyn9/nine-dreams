import {useEffect, useState} from 'react';
import {motion} from "framer-motion"

export default function Nav (){
    const [navActive, setNavActive] = useState(false);

    function handleNavBtn() {
        setNavActive(!navActive)
    }

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
            <div className={`btn-nav${navActive? "-active" : ""}`} onClick={handleNavBtn}>Button</div>
            <div className={`menu-container ${navActive? "menu-active" : ""}`}>
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