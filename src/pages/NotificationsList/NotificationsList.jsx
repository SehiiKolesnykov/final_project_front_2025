import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Notifications from "../Notifications/Notifications";

export default function NotificationList() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('../../../public/notications.json')
            .then((res) => res.json())
            .then((data) => setPosts(data));

    }, [])
    const Notification = styled.div`
    background-color: #000;
    padding:15px;
    `
    const NotificationsWrapper = styled.div`
    max-width:1280px;
    margin: 0 auto;
    `
    return (
        <Notification>
            <NotificationsWrapper>
                {posts.map((singlePost) => (
                    <Notifications post={singlePost} key={singlePost.id}/>
                )
                )}
            </NotificationsWrapper>
        </Notification>



    )

}