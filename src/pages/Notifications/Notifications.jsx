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

export default function Notifications({ post }) {
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
            </NotificationsPost>

        </NotificationPostLink>
    )

}