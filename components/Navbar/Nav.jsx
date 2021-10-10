export default function Nav (){
    return (
        <nav className="nav padding-container">
            <div className="logo">Logo</div>
            <div className="menu-container">
                <MenuItem name="home"/>
                <MenuItem name="home"/>
                <MenuItem name="home"/>
                <MenuItem name="home"/>
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