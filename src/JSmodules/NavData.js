const NavData = [
    {
        name: "Pages",
        links: <div className="nav-menu-style">
            <a href="" className="link-desat">Template Page</a>
        </div>,
    },
    {
        name: "Apps",
        links: <div className="nav-menu-style">
            <a href="https://bthol.github.io/Space-Battle/" target="_blank" className="link-desat">Space Battle</a>
            <a href="https://bthol.github.io/Magic-8-Ball/" target="_blank" className="link-desat">Magic 8 Ball</a>
            <a href="https://bthol.github.io/Retro-Toe/" target="_blank" className="link-desat">Retro Toe</a>
            <a href="https://bthol.github.io/holiday-tree/" target="_blank" className="link-desat">Holiday Tree</a>
            <a onClick={(e) => {
                e.preventDefault();
                alert("Feature still in development");
            }} href="" target="_blank" className="link-desat">Calculo</a>
        </div>,
    },
];

export { NavData }