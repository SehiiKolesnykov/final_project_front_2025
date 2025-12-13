import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "@/shared/ui/UseMedia";

export default function Notifications({ post }) {
    const NotificationsPost = styled.div`
    margin-bottom: 20px;
    padding: 15px;
    border-bottom: none;
    `
    const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    `
    const UserInfoWrapper = styled.div`
    color:#fff;
    display:flex;
    align-items:center;
    gap:10px;
    
    `
    const Name = styled.h3`
  font-size: 15px;
  &:hover {
    text-decoration: underline;
  }
`;
    const UserName = styled.p`
  color: #6e767d;
  font-size: 15px;
`
    const Content = styled.p`
color: #fff;
font-size: 15px;

`
    return (
        <NotificationsPost>
            <UserInfoWrapper>
                <Avatar src={`${post.avatar}`} />
                <Name>{post.user.name}</Name>
                <UserName>@{post.user.username}</UserName>
            </UserInfoWrapper>
            <Content>
                {post.text}
            </Content>
        </NotificationsPost>
    )

}