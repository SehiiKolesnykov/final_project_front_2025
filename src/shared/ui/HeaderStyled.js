import styled from "styled-components";

export const Heder = styled.header`
  position:sticky;
  top: 0;
  z-index: 1000;
  background: #000;
  a{
  text-decoration: none;
  color: #fff;
  border: 1px solid #000;
  background: #000;
  border-radius: 10px;
  display:flex;
  align-items:center;
  padding:10px;
  }
  `
  export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 15px;
  `
  export const MenuWrapper = styled.div`
  display:flex;
  flex-direction:column;
  position:absolute;
  top:50px;
  right:10px;
  gap:5px;
  @media(min-width:769px){
  flex-direction:row;
  position:static;
  }
  `
  export const LogoWrapper = styled.div`
  display: flex;
  align-items:center;
  gap: 10px;
  `
  export const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  
  `