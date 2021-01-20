import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center
`;

const SectionBox = styled.div`
  width:100%;
  padding: 3rem 20%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => props.alignCenter && `align-items:${props.alignCenter}`};
  padding-bottom:10px;
  background-color: ${props => props.backgroundColor};
  ${props => props.headerBox && `
    background-color: #7993bc; /* For browsers that do not support gradients */
    background-image: linear-gradient(to right, #7993bc 30% , #fbd7bb);
    height: 50vh;
  `};
`;

const LogoBox = styled.div`
  ${props => props.marginTop && `margin-top:${props.marginTop}`};
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
`;

const Logo = styled.img`
    width: 150px;
    height:50px;
    margin: 15px;
`;

const HomeStyle = {
  Container,
  SectionBox,
  LogoBox,
  Logo
}

export default HomeStyle;