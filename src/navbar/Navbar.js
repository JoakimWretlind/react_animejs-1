import { Nav, NavUL, NavLi } from "./navbar.style";
import { navbarData } from "./navbarData";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavUL>
                    {navbarData.map(item => (
                        <NavLi
                            key={item.id}
                            to={item.path}
                        >
                            {item.title}
                        </NavLi>
                    ))}
                </NavUL>
            </Nav>
        </>
    )
};

export default Navbar;
