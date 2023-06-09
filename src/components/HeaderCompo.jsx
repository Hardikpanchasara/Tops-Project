import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';

const HeaderCompo = () => {
    const [showBasic, setShowBasic] = useState(false);

    const [cookies, setCookie] = useCookies([]);
    const navigate = useNavigate()
    useEffect(() => {
        if (cookies.role == 1) {
            navigate("/admin")
        }
        if (cookies.role == 2) {
            navigate("/")
        }
    })

    const MenuItem = {
        "/": "Home",
        "/about": "About",
        "/contact": "Contact",
    }


    const Dropdown = [
        {
            "/ui-ux": "UI-UX",
        },
        {
            "/web-development": "Web-Development",
        },
        {
            "/frontend-development": "FrontEnd-Development",
        },
        {
            "/backend-development": "BackEnd-Development",
        },
        {
            "/seo": "SEO",
        },
        {
            "/data-science": "Data-Science",
        },
    ]

    const Menudata = Object.entries(MenuItem).map(([key, value], i) => {
        // console.log(item)
        return (<MDBNavbarItem key={i}>
            <NavLink className="nav-link" aria-current="page" to={key} >{value}</NavLink>
        </MDBNavbarItem>)
    })

    const Dropdowndata = Dropdown.map((item, i) => {
        // console.log(item)
        return <MDBDropdownItem key={i} ><NavLink className="nav-link" aria-current="page" to={`courses${Object.keys(item)}`}> {Object.values(item)}</NavLink>
        </MDBDropdownItem>
    })

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand >Brand</MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic} >
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

                            {Menudata}
                            <MDBNavbarItem>
                                {(cookies.userid == undefined) ? <NavLink className='nav-link' to="/login">Login</NavLink> : <NavLink className='nav-link' to="/logout">Logout</NavLink>}
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                        Courses
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        {Dropdowndata}
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>

                        </MDBNavbarNav>

                        <form className='d-flex input-group w-auto'>
                            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                            <MDBBtn color='primary'>Search</MDBBtn>
                        </form>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

            <Outlet />
        </>
    )
}

export default HeaderCompo