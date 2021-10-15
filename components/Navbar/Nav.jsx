import {useEffect, useState, useRef} from 'react';
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
            <div className={`btn-nav${navActive? "-active" : ""}`} onClick={handleNavBtn}>|||</div>
            <NavMenu active={navActive}/>
        </motion.nav>
    )
}

function NavMenu(props) {
    const {active} = props;
    return (
        <motion.div className={`menu-container ${active ? "menu-active" : ""}`}>
            <MenuItem name="home"/>
            <MenuItem name="products"/>
            <MenuItem name="creative communication"/>
            <MenuItem name="about"/>
            <MenuItem name="contact"/>
        </motion.div>
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