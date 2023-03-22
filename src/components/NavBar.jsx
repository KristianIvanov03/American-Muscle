import "../assets/NavBar.css"
const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <p>American Muscle</p>
            </div>
            <div className="links">
                <ul>
                    <li><p>Info</p></li>
                    <li><p>Our Mission</p></li>
                    <li><p>Catalog</p></li>
                    <li><p>Rate us</p></li>
                    <li><p>Contacts</p></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar ;