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
  padding: 3rem 23%;
  flex: 1;
  display: flex;
  flex-direction: column;
  ${props => props.alignCenter && `align-items: center; justify-content: center;`};
  padding-bottom:10px;
  background-color: ${props => props.backgroundColor};
  ${props => props.headerBox && `
    background-color: ${props.theme.colors.shipCove}; /* For browsers that do not support gradients */
    background-image: linear-gradient(to right, ${props.theme.colors.shipCove} 30% , ${props.theme.colors.apricotPeach});
    height: 50vh;
    padding-bottom:6rem;
  `};
`;

const LogoBox = styled.div`
  ${props => props.marginTop && `margin-top:${props.marginTop}`};
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 1100px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }   
`;

const Logo = styled.img`
  width: 150px;
  height:50px;
  margin-right: 8%;

`;

const Block = styled.div`
  ${props => props.flex && `display:flex`};
  ${props => props.direction && `flex-direction:${props.direction}`};
  ${props => props.justifyContent && `justify-content:${props.justifyContent}`};
  ${props => props.alignItems && `align-items:${props.alignItems}`};
  @media (max-width: 1100px) {
    flex-direction:column;
    margin-top:10px;
  }    
`;


const Poster = styled.img`
  width: 80%;
`;

const Title = styled.h1`
  ${props => props.color && `color:${props.color}`};
  ${props => props.textAlign && `text-align:${props.textAlign}`};
  font-family: ${props => props.theme.font.semiBold};
`;

const Paragraph = styled.p`
  ${props => props.marginTop && `margin-top:${props.marginTop}`};
  ${props => props.color && `color:${props.color}`};
  font-family: ${props => props.theme.font.semiBold};
`;

const DownloadButton = styled.div`
  background-color: ${props => props.theme.colors.shipCove};
  margin-top: 20px;
  padding: 15px 20px;
  border-radius: 4px;
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center; 
  cursor:pointer;
  color:white;
  :hover{
    background-color: ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.black};
  }
`;


const HomeStyle = {
  Container,
  SectionBox,
  LogoBox,
  Logo,
  Block,
  Poster,
  Title,
  Paragraph,
  DownloadButton
}

export default HomeStyle;