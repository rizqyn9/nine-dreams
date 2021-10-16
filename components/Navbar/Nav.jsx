import {useEffect, useState, useRef} from 'react';
import {motion, useAnimation} from "framer-motion"
import {useAtom, atom} from "jotai"

export default function Nav (){
    const [navActive, setNavActive] = useState(false);

    function handleNavBtn() {
        setNavActive(!navActive)
    }

    function handleMenuMobile(data) {
        setNavActive(false);
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
            <NavContainerMobile  active={navActive} handle={handleMenuMobile} useScroll/>
            <NavMenu/>
        </motion.nav>
    )
}

function handleScroll(target) {
    document.getElementById(target).scrollIntoView();
}

function NavContainerMobile(props) {
    const {active, useScroll} = props;
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
            await animController.start("close")
        }
    }, [active])

    function handleMenuClick(data) {
        // console.log(data);
        props.handle(data);
        handleScroll(data);
    }
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
            <MenuItemMobile name="home" target="homepage" handle={handleMenuClick}/>
            <MenuItemMobile name="products" target="products" handle={handleMenuClick}/>
            <MenuItemMobile name="creative communication" target="creative" handle={handleMenuClick}/>
            <MenuItemMobile name="about" target="about" handle={handleMenuClick}/>
            <MenuItemMobile name="contact" target="contact" handle={handleMenuClick}/>
        </motion.div>
    )
}

function MenuItemMobile(props) {
    const {name, target } = props;

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
            onClick={() => props.handle(target)}
        >
            {name}
        </motion.div>
    )
}

function NavMenu(props) {

    return (
        <motion.div className={`menu-container`}
        >
            <MenuItem name="home" target="homepage"/>
            <MenuItem name="products" target="products"/>
            <MenuItem name="creative communication" target="creative"/>
            <MenuItem name="about" target="about"/>
            <MenuItem name="contact" target="contact"/>
        </motion.div>
    )
}

function MenuItem(props){
    const {name, target} = props;

    function handleOnClick() {
        handleScroll(target)
    }
    return (
        <motion.div className="menu" 
            onClick={handleOnClick}
        >
            {name}
        </motion.div>
    )
}