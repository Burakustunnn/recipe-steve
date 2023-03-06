import styled from 'styled-components';

const FlexStyle = styled.div`
display: flex;
justify-content: ${({x})=> x || "center" };
align-items: ${({e})=> e || "center"};
flex-wrap: ${({w})=> w || "wrap" };


`;

export default FlexStyle;
