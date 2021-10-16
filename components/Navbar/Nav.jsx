import {useEffect, useState, useRef} from 'react';
import {motion, useAnimation} from "framer-motion"
import {useAtom, atom} from "jotai"

export default function Nav (){
    const [navActive, setNavActive] = useState(false);

    function handleNavBtn() {
        setNavActive(!navActive)
        console.log("asdad");
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
            <NavContainerMobile  active={navActive}/>
            <NavMenu/>
        </motion.nav>
    )
}

function NavContainerMobile(props) {
    const {active} = props;
    const animController = useAnimation();

    const variant = {
        open : {
            opacity:1,
            x:"0"
        },
        close: {
            opacity:0,
            x:"-100vw"    
        }
    }

    useEffect( async () => {
        if(active){
            await animController.start("open")

        } else {
            animController.start("close")
        }
    }, [active])

    return(
        <motion.div className={`menu-container-mobile nav-active`}
            variants={variant}
            initial="closed"
            animate={animController}
            transition={{
                duration:.5,
                staggerChildren:.1,
                staggerDirection : active ? -1 : 1,
                when: active ? "beforeChildren" : "afterChildren"
            }}
        >
            <MenuItemMobile name="home"/>
            <MenuItemMobile name="products"/>
            <MenuItemMobile name="creative communication"/>
            <MenuItemMobile name="about"/>
            <MenuItemMobile name="contact"/>
        </motion.div>
    )
}

function MenuItemMobile(props) {
    const {name } = props;

    const variant = {
        open: {
            x: "0",
            opacity: 1,
        },
        close: {
            x: "-100vw"
        }
    }

    return(
        <motion.div className='menu-mobile'
            variants={variant}
            transition={{
                duration:.3
            }}
        >
            {name}
        </motion.div>
    )
}

function NavMenu(props) {

    return (
        <motion.div className={`menu-container`}
        >
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
        <motion.div className="menu">
            {name}
        </motion.div>
    )
}