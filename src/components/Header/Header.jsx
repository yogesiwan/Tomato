import React from 'react'
import './Header.css'

const Header = () => {
    return <div className='header'>
        <div className="header-contents">
            <h2>Order Your Fav Food Here</h2>
            <p>
            Enjoy a variety of delicious dishes delivered right to your door. Explore our menu and treat yourself today!
            </p>
           <a href="#explore-menu"> <button>
                View Menu
            </button></a>
        </div>

    </div>;
}



export default Header;