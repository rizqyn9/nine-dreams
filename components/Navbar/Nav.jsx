export default function Nav (){
    return (
        <nav className="nav padding-container">
            <div className="logo">Logo</div>
            <div className="menu-container">
                <MenuItem name="home"/>
                <MenuItem name="products"/>
                <MenuItem name="creative communication"/>
                <MenuItem name="about"/>
                <MenuItem name="contact"/>
            </div>
        </nav>
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