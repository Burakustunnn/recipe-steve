import {
  FormContainer,
  H1,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.style.jsx";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()

  const userInfo={
    username:"admin"
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    sessionStorage.setItem("username",JSON.stringify(userInfo))
    navigate("/")
    

  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <H1>Burak's Kitchen</H1>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Enter username" />
          <StyledInput type="password" placeholder="Enter password" />
        <StyledButton type="submit">Login</StyledButton>
        </StyledForm>

      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
