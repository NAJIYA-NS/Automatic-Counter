import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar className="text-light" style={{backgroundColor:"#c14826"}}>
                
                    <Navbar.Brand href="#home" className='text-light ms-4'>
                        <img
                            alt=""
                            src="https://blog.indezine.com/wp-content/uploads/2018/03/PPT2GIFa-Counter.gif"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Automatic Counter
                    </Navbar.Brand>
                
            </Navbar>
        </>
    )
}

export default Header