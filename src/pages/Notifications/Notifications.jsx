import React from "react";
import {
    NotificationPostLink,
    NotificationsPost,
    UserInfoWrapper,
    Avatar,
    Name,
    UserName,
    Content,
    Time
} from '../Notifications/NotificationsStyled'
import { NavLink } from "react-router-dom";
import Close from "../../image/close.svg?react"
import { CloseButton } from "../Notifications/NotificationsStyled";


export default function Notifications({post,onClose}) {

        function getHref(){
            if(post.text === 'Send new message for you'){
                return "/users/:id/chat" 
            }else{
                return "/users/:id/posts"
            
            }

        }

        const getTime = (createTime) => {
           let time = new Date(createTime)
           return time.toLocaleDateString()
        }   
    return (
        <NotificationPostLink href={getHref()}>
            <NotificationsPost>
                <UserInfoWrapper>
                    <Avatar src={post.user.avatar}/>
                    <Name>{post.user.name}</Name>
                    <UserName>@{post.user.username}</UserName>
                    <Time>{getTime(post.createTime)}</Time>
                </UserInfoWrapper>
                <Content>
                    {post.text}
                </Content>
                <CloseButton onClick={onClose}><Close/></CloseButton>
            </NotificationsPost>
        </NotificationPostLink>
    )

}