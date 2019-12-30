import React from 'react';
//import {Navbar} from 'react-router-dom';

/*const mystyle = {
    padding: "50px"
}*/

const Header = () => (
    //<nav class="navbar navbar-expand-lg navbar-dark bg-primary"style={mystyle}></nav>
    <header role="banner" data-siteid="MLA" class="nav-header nav-header-plus">
        <div class="nav-bounds nav-bounds-with-cart nav-bounds-with-cp">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center" >
                <form class="nav-search">
                    <input class="nav-search-input" type="text" placeholder="Buscar producto" maxLength = "120" tabIndex="2"/>
                    <button class="nav-search-btn" type="submit" tabIndex= "3">
                        <div role= "img" aria-label = "Buscar" class = "nav-icon-search">
                        </div>
                    </button>
                </form>
            </nav>
            <div class="nav-header-menu-wrapper">   
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        
            
        </div>
    </header>
)

export default Header;