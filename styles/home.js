import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`;

const SectionBox = styled.div`
  width:100%;
  height:${props => props.height ? props.height  : ``};;
  padding: ${props => props.large ? `3rem 20%` : ``};
  flex: ${props => props.large ? `1` : ``};
  display: flex;
  flex-direction: column;
  ${props => props.alignCenter && `align-items: center; justify-content: center;`};
  ${props => props.marginTop && `margin-top: ${props.marginTop}`};
  padding-bottom:10px;
  background-color: ${props => props.backgroundColor};
  ${props => props.headerBox && `
    background-color: ${props.theme.colors.shipCove}; /* For browsers that do not support gradients */
    background-image: linear-gradient(to right, ${props.theme.colors.shipCove} 30% , ${props.theme.colors.apricotPeach});
    height: 50vh;
    padding-bottom:6rem;
  `};
  @media (max-width: 1100px) {
    margin-top: -40px;
    padding-top: 40px;
    padding-left:10px;
    padding-right:10px;
    padding-bottom:50px;
    ${props => props.noPadding && `
      padding-left:0px;
      padding-right:0px;
    `}
  } 

`;

const LogoBox = styled.div`
  ${props => props.marginTop && `margin-top:${props.marginTop}`};
  display: flex;
  flex-direction: row-reverse;
  padding-right: 8%;
  @media (max-width: 1100px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-right: 0px;
    padding-top:20px;
  }   
`;

const Logo = styled.img`
  width: 150px;
  height:50px;
  @media (max-width: 1100px) {
    width: 250px;
    height:100px;
  }  
`;

const Block = styled.div`
  padding:10px;
  ${props => props.flex && `display:flex`};
  ${props => props.width && `width:${props.width}`};
  ${props => props.direction && `flex-direction:${props.direction}`};
  ${props => props.justifyContent && `justify-content:${props.justifyContent}`};
  ${props => props.alignItems && `align-items:${props.alignItems}`};
  @media (max-width: 1100px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:10px;
    width:100%;
    ${props => props.model && `
      flex-direction: row;
      flex-wrap: wap;
    `}
  }    
`;

const Poster = styled.img`
  width: 100%;
  border-radius:10px;
`;

const Models = styled.img`
  width: 80%;
  border-radius:100px;
`;

const AppImage = styled.img`
  width: 80%;
  border-radius:10px;
  cursor:pointer;
`;

const Title = styled.h1`
  ${props => props.color && `color:${props.color}`};
  ${props => props.textAlign && `text-align:${props.textAlign}`};
  font-family: ${props => props.theme.font.semiBold};
  font-size: ${props => props.size};
  padding-top:10px;
`;

const Paragraph = styled.p`
  ${props => props.marginTop && `margin-top:${props.marginTop}`};
  ${props => props.color && `color:${props.color}`};
  ${props => props.pointer && `cursor:pointer`};
  font-family: ${props => props.theme.font.semiBold};
`;

const DownloadButton = styled.button`
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
  @media (max-width: 1100px) {
    margin-bottom:20px;
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
  DownloadButton,
  Models,
  AppImage
}

export default HomeStyle;