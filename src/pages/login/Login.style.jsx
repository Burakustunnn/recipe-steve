import styled from 'styled-components';
import FlexStyle from "../../components/globalStyles/Flex.style"

export const LoginContainer = styled(FlexStyle)`
height:calc(100vh - 53px);
background-image: url('https://picsum.photos/1600/900');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
object-position: center;
 
`;

export const FormContainer= styled(FlexStyle)`
border-radius: 50px;
flex-direction: column;
width: 50rem;
height: 50rem;
max-width: 60rem;
background-color:#0000002a;
padding: 1rem;
`

export const StyledImg = styled.img`
  width: 150px;
  margin: 1rem;  
  animation: haraket 7s ease infinite;
  animation-direction: alternate;
  

  @keyframes haraket {
    0% {
        transform:translateX(0px );
    }
    50%{
      transform: translateX(50px);
    }   
    
    100% {
        transform: translateX(-50px );
    }}
`;
export const H1 = styled.h1`
  color: white;
  font-size: 3rem;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const StyledInput = styled.input`
  height: 3rem;
  font-size: 2rem;
  width: 16rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 1rem;
`;
export const StyledButton = styled.button`

  font-size: 2rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  color: white;
  border: none;
  padding: .5rem;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;


