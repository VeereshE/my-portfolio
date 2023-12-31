import "./index.css"

const NavBar = () =>{

   
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/" id="Home"><span className="span-2">Vee</span><span className="span-elemt">ru</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">   
                    <a className="nav-link" href="#Home">Home </a>
                    <a className="nav-link" href="#About">About</a>
                    <a className="nav-link" href="#Project">Project</a>
                    <a className="nav-link "href="#Skills">Skills</a>
                    <a className="nav-link "href="#Contact">Contact</a>
                </ul>
                
            </div>
        </nav>

    )

}

export default  NavBar;