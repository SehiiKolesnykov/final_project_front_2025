import styled from "styled-components"

export const NotificationPostLink = styled.a`
    text-decoration:none;
    color:#000;
    `
export const NotificationsPost = styled.div`
    background-color: #fff;
    border-radius:20px;
    margin-bottom:5px;
    padding: 5px;
    border-bottom:1px solid #6e767d;
    `
export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    `
export const UserInfoWrapper = styled.div`
    color:#000;
    display:flex;
    align-items:center;
    gap:10px;
    
    `
export const Name = styled.h3`
  font-size: 15px;
  &:hover {
    text-decoration: underline;
  }
`;
export const UserName = styled.p`
  color: #6e767d;
  font-size: 15px;
`
export const Content = styled.p`
font-size: 15px;

`