import React from "react";
import { useSelector} from "react-redux";
import {
    selectFeedPosts,
} from "@/app/store/posts/postsSelectors";
import Favorite from "../Favorite/Favorite";
import {FavoriteWrapper,Favorites} from './FavoriteListStyled'
export default function FavoriteList() {
    const posts = useSelector(selectFeedPosts);
    return (
        <Favorites>
            <FavoriteWrapper>
                {posts.map(post => (
                    <Favorite post={post} key={post.postId}/>
                ))}
            </FavoriteWrapper>
        </Favorites>



    )

}