import styled from 'styled-components';
import FlexStyle from '../globalStyles/Flex.style';
import { NavLink } from 'react-router-dom';


export const Nav = styled(FlexStyle)`
padding: .5rem 2rem;

font-size: 2rem;
font-weight: 900;
background-color: ${({theme})=>theme.colors.navbarBgColor};
`;

 export const Menu=styled(FlexStyle)` 
 gap:2rem;
 @media (max-width:900px) {
    /* display: none; */
    flex-direction: column;
    width: 100%;
    max-height: ${({isOpen})=> isOpen ? "400px":"0"};
    overflow: hidden;
 }
 `
 export const Hamburger=styled.div`
 display: none;
 cursor: pointer;
 @media (max-width:900px) {
    display: block;    
 }
 `

export const MenuLink=styled(NavLink)`
text-decoration: none;
@media (max-width:900px) {
  border-bottom: 2px solid black;
  width: 100%;
  text-align: center;
    
 }


`


