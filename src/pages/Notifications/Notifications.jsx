import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@/shared/ui/UseMedia";

export default function Notifications({ post }) {
    const Notifications = styled.div`
    background-color: #000;
    padding:15px;
    `
    const NotificationsWrapper = styled.div`
    `
    const NotificationsPost = styled.div`
    background-color: #438;
    margin-bottom: 20px;
    `

    return (
        <>


            {post.map((singlePost) => (
                console.log(singlePost)
            ))}

            <Notifications>
                <NotificationsWrapper>
                    <NotificationsPost>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus nobis reprehenderit debitis provident eligendi quis voluptatum possimus, voluptatem dolor excepturi doloribus incidunt error neque aspernatur perferendis dolore enim obcaecati!</NotificationsPost>
                    <NotificationsPost>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime culpa non rerum similique obcaecati dolorem, dolorum quam temporibus? Eveniet cumque eum ipsum illum aspernatur iusto aut ut aliquam ea. Iste.</NotificationsPost>
                    <NotificationsPost>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum excepturi quos est, harum voluptatibus dicta ratione quasi illo sed consectetur inventore molestias neque quibusdam! Fugiat optio dolor placeat magnam.</NotificationsPost>
                    <NotificationsPost>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem in pariatur ullam perspiciatis nulla, sunt recusandae suscipit deleniti obcaecati incidunt omnis est sapiente id, dignissimos veritatis qui blanditiis, doloremque voluptatem.</NotificationsPost>
                    <NotificationsPost>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi maiores aperiam quia. Eum tempora dicta natus pariatur, porro voluptas ut ad quam velit molestias maiores numquam quaerat! Explicabo, reiciendis dolorum.</NotificationsPost>
                </NotificationsWrapper>
            </Notifications>

        </>

    )

}