import React from "react";
import {
    NotificationPostLink,
    NotificationsPost,
    UserInfoWrapper,
    Avatar,
    Name,
    UserName,
    Content

} from '../Notifications/NotificationsStyled'
import Close from "../../image/close.svg?react"
import { CloseButton } from "../Notifications/NotificationsStyled";



export default function Notifications({post,onClose}) {
    

    return (
        <NotificationPostLink href='#'>
            <NotificationsPost>
                <UserInfoWrapper>
                    <Avatar src={post.user.avatar} />
                    <Name>{post.user.name}</Name>
                    <UserName>@{post.user.username}</UserName>
                </UserInfoWrapper>
                <Content>
                    {post.text}
                </Content>
                <CloseButton onClick={onClose}><Close/></CloseButton>
            </NotificationsPost>

        </NotificationPostLink>
    )

}