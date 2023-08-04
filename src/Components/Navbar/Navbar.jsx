import './navbar.css'
const Navbar = () => {
    return (
        <div className="navbar__container">
            <h4>Gaming ERA </h4>
            <nav>
               <a href="#menu"> Menu </a>
               <a href="#menu"> ABout</a>
               <a href="#games"> Game's</a>
               <a href="#contact"> Contact</a>

            </nav>

            <button className='btn btn__red'> Login </button>
        </div>
    )
}

export default Navbar