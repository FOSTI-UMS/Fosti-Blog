import Logo from '../vendor/img/logo.png'
function Navbar({tema}){
    return(
        <nav className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation" style={tema=="dark"?{backgroundColor:'rgba(38, 37, 37, 0.97)'}:null}>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img src={Logo} alt="logo"/>
                </a>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a style={tema=="dark"?{color:"white"}:null} className="nav-link" href="http://fostiums.org">Stories <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a style={tema=="dark"?{color:"white"}:null} className="nav-link" href="https://github.com/FOSTI-UMS">Github</a>
                        </li>
                        <li className="nav-item">
                            <a style={tema=="dark"?{color:"white"}:null} className="nav-link" href="http://event.fostiums.org">Event</a>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                            <span className="search-icon">
                                <svg className="svgIcon-use" width="25" height="25"
                                                               viewBox="0 0 25 25"><path
                                d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path></svg></span>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
