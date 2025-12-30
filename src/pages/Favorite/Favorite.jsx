
import React from "react";
import PropTypes from "prop-types";
import {
    AuthorName,
    AuthorUsername,
    Text,
    Media,
    MediaWrapper,
} from "@/shared/post/PostCard/PostCard.styled";
import { Avatar } from "@/shared/post/PostCard/PostCard.styled";
import { FullPostWrapper, PostHeader, PostAuthor } from "../post/ui/FullPost.styled";
import PostDate from "../post/ui/PostDate";
import Actions from "@/shared/post/Actions/Actions";

export default function Favorite({ post }) {
    const { avatar, name, username, text, media, createdTime, liked} = post;
    return (
        <>
            {liked && (
                <FullPostWrapper>
                    <PostHeader>
                        <Avatar src={avatar} />
                        <PostAuthor>
                            <AuthorName>{name}</AuthorName>
                            <AuthorUsername>@{username}</AuthorUsername>
                        </PostAuthor>
                    </PostHeader>
                    <Text>{text}</Text>
                    {media && (
                        <MediaWrapper>
                            <Media src={media} />
                        </MediaWrapper>
                    )}
                    <PostDate time={createdTime} />
                    <Actions post={post} withBorder />
                </FullPostWrapper>
            )}
        </>
    )
}