const Header = ({appTitle})=>(
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="www.google.com">{appTitle}</a>
        </div>
    </nav>
);

export default Header;