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
  height:${props => props.height ? props.height : ``};;
  padding: ${props => props.large ? `3rem 20%` : ``};
  flex: ${props => props.large ? `1` : ``};
  display: flex;
  flex-direction: column;
  ${props => props.alignCenter && `align-items: center; justify-content: center;`};
  ${props => props.marginTop && `margin-top: ${props.marginTop}`};
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom}`};
  ${props => props.borderTop && `border-top: 1px solid ${props.borderTop}`};
  ${props => props.rounded && `border-radius: 15px`};
  ${props => props.roundedTop && `border-radius: 15px 15px 0px 0px`};
  padding-bottom:10px;
  background-color: ${props => props.backgroundColor};
  ${props => props.headerBox && `
    background-color: ${props.theme.colors.shipCove}; 
    background-image: linear-gradient(to right, #70001b 10% , ${props.theme.colors.nightshadz});
    height: 50vh;
    padding-bottom:6rem; 
  `};
  ${props => props.downloadBox && `
    background-color: ${props.theme.colors.shipCove}; 
    background-image: linear-gradient(to right, #70001b 10% , ${props.theme.colors.nightshadz});
    height: 50vh;
  `};
  ${props => props.terms && `
    flex-direction: row;
    justify-content:space-between;
    padding-left:10px;
    padding-right:10px;
  `};
  ${props => props.shadow && `
    box-shadow: 0px 4px 4px #ddd;
  `};

  @media (max-width: 1100px) {
    margin-top: -40px;
    padding-top: 40px;
    padding-left:10px;
    padding-right:10px;
    padding-bottom:50px;
    ${props => props.noPadding && `
      padding:0px;
    `}
  } 

`;


const PrimaryButton = styled.button`
  background-color: transparent;
  margin-top: 20px;
  padding: 15px 20px;
  border-radius: 50px;
  border: 2px solid #fff;
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center; 
  cursor:pointer;
  color: #fff;
  text-transform:uppercase;
  :hover{
    border: 2px solid ${props => props.theme.colors.nightshadz};
    background-color: #fff;
    color: ${props => props.theme.colors.tundora};
  }
  @media (max-width: 1100px) {
    margin-bottom:20px;
  } 
`;

const Models = styled.img`
  width: 100px;
  height: 100px;
  margin:10px;
  border-radius:100px;
  padding:2px;
  border:2px solid ${props => props.theme.colors.nightshadz};
`;

const SecondaryButton = styled.button`
background-color: #fff;
  padding: 10px;
  border-radius: 100px;
  border: 2px solid ${props => props.theme.colors.nightshadz};
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center; 
  cursor:pointer;
  text-transform:uppercase;
  color: ${props => props.theme.colors.tundora};
  ${props => props.hidden && `display: none;`}
  :hover{
    border: 2px solid #fff;
    background-color: ${props => props.theme.colors.nightshadz};
    color: #fff;
  }
  @media (max-width: 1100px) {
    margin-bottom:20px;
  } 
`;


const Paragraph = styled.p`
  ${props => props.marginTop && `margin-top:${props.marginTop}`};
  ${props => props.color && `color:${props.color}`};
  ${props => props.pointer && `cursor:pointer`};
  ${props => props.float && `float:${props.float};`};
  ${props => props.textAlign && `text-align: ${props.textAlign}`};
  ${props => props.justifyContent && `
    display: flex;
    flex-direction: ${props.direction};
    justify-content: ${props.justifyContent};
  `};
  font-family: ${props => props.theme.font.regular};
`;

const Logo = styled.img`
  width: 150px;
  height:50px;
  ${props => props.backgroundColor && `
    background-color:${props.backgroundColor};
    width: 200px;
    height:70px;
    padding:10px;
    border-radius:10px;

  `}
  @media (max-width: 1100px) {
    width: 250px;
    height:100px;
  }  
`;

const Block = styled.div`
  ${props => props.marginLeftMobile && `margin-left: ${props.marginLeftMobile}`}
  padding:${props => props.noPadding ? `0px` : `10px`};
  ${props => props.flex && `display:flex;`};
  ${props => props.width && `width:${props.width}`};
  ${props => props.direction && `flex-direction:${props.direction}`};
  ${props => props.justifyContent && `justify-content:${props.justifyContent}`};
  ${props => props.alignItems && `align-items:${props.alignItems}`};
  ${props => props.marginButtom && `margin-bottom: 10px`};

  @media (max-width: 1100px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:10px;
    width:100%;
    margin-left: 0px;
    ${props => props.model && `
      flex-direction: row;
      flex-wrap: wap;
    `}
  }  
  ${props => props.shadow && `
    box-shadow: 0px 4px 4px #ddd;
  `};  
`;

const TopImage = styled.img`
  width: 300px;
  @media (max-width: 1100px) {
    width:100%;
    margin-bottom:-100px;
    margin-top:0px;
  } 
  border-radius:10px;
`;

const Poster = styled.img`
  width: 100%;
  border-radius:10px;
  border:1px solid rgba(171,57,84, 0.2);
`;

const DImage = styled.img`
  width: 80%;
  height: 50vh;
`;


const AppImage = styled.img`
  width: 180px;
  height:70px;
  border-radius:10px;
  cursor:pointer;
  margin-top:20px;
  ${props => props.marginRignt && `margin-right:20px;`}
  @media (max-width: 1100px) {
    margin-right:0px;
    width:50%;
  } 
`;

const Title = styled.h1`
  ${props => props.color && `color:${props.color}`};
  ${props => props.textAlign && `text-align:${props.textAlign}`};
  font-family: ${props => props.theme.font.regular};
  font-size: ${props => props.size};
  ${props => props.paddingTop && `padding-top:${props.paddingTop}`};
  text-transform: uppercase;
`;

const Input = styled.input`
  border: 2px solid ${props => props.theme.colors.nightshadz};
  border-radius:50px;
  padding:10px 30px;
`;


const UlList = styled.ul`
  list-style:none;
`;

const Bolt = styled.b`
`;

const LiList = styled.li``;


const Style = {
  Container,
  SectionBox,
  Logo,
  Block,
  Poster,
  DImage,
  Title,
  Paragraph,
  PrimaryButton,
  SecondaryButton,
  Models,
  AppImage,
  UlList,
  LiList,
  Bolt,
  TopImage,
  Input
}

export default Style;