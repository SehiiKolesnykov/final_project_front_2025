import React, { useEffect, useState } from "react";
import Notifications from "../Notifications/Notifications";
import { Notification, NotificationsWrapper } from '../NotificationsList/NotificationsListStyle'

export default function NotificationList() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('../../../public/notications.json')
            .then((res) => res.json())
            .then((data) => setPosts(data));

    }, [])
    const deletePost = (notificationId) => {
        setPosts(prev => prev.filter(item => item.notificationId !== notificationId));

        console.log("Post with id:" + ' ' + notificationId + ' ' + "deleted!")
    }
   
    return (
        <Notification>
            <NotificationsWrapper>
                {posts.map((singlePost) => (
                    <Notifications post={singlePost} key={singlePost.id} onClose={()=>deletePost(singlePost.notificationId)} />
                )
                )}
            </NotificationsWrapper>
        </Notification>



    )

}