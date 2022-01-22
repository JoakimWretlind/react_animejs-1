import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 6rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #222;
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 100%;
    max-width: 96rem;
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLi = styled(Link)`
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: .3rem;
    color: #fff;
    transition: .3s ease-out;
    &:hover{
        cursor: pointer;
        color: #999;
    }
`;
