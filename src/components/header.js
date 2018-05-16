import React from 'react';
import {Link} from 'react-router';

const header = props => {
  
    const { route } = props;
    return (
        <header className="App-header">
        	<ul className="menus">
        		<Link to="/" className={ route === '/' ? "menu-item active-menu" : "menu-item" }> 
        			<span className="color-white">Read New Jokes </span>

        			</Link>
        		<Link to="/summary" className={ route !== '/' ? "menu-item active-menu" : "menu-item"}> 
        			<span className="color-white"> 
        				Summary 
        			</span>
        		</Link>
        	</ul>
        </header>
    );
  
};

export default header;