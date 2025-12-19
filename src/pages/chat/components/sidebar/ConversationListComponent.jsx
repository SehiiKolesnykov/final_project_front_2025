import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveConversation } from "@/app/store/chat/slices/chatSlice";

// import { selectorActiveConversationId } from "../../redux/selectors.js";

import {
  Sidebar,
  SidebarHeader,
  SearchBar,
  SearchWrapper,
  SearchIcon,
  ConversationList,
  ConversationItem,
  Avatar,
  OnlineIndicator,
  ConversationInfo,
  ConversationName,
  ConversationDetails,
  ConversationOptions,
  Timestamp,
  LastMessage,
  UnreadBadge,
} from "./styles";

const ConversationListComponent = () => {
  const dispatch = useDispatch();
  const { conversations, activeConversationId } = useSelector(
    (state) => state.chat
  );
  // const activeConversationId = useSelector(selectorActiveConversationId);

  const [search, setSearch] = useState("");
  // const [isOpenConvOptions, setIsOpenConvOptions] = useState(false);

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpenConvOptions = (event) => {
    console.log(event);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <h2>Messages</h2>
        <SearchWrapper>
          <SearchIcon src="./search.svg" />
          <SearchBar
            placeholder="Search Direct Messages"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="search"
          />
        </SearchWrapper>
      </SidebarHeader>
      <ConversationList>
        {filteredConversations.map((conv) => (
          <ConversationItem
            key={conv.id}
            active={conv.id === activeConversationId}
            onClick={() => dispatch(setActiveConversation(conv.id))}
          >
            <Avatar>
              {conv.avatar}
              <OnlineIndicator online={conv.isOnline} />
            </Avatar>
            <ConversationInfo>
              <ConversationName>
                {conv.name}
                <ConversationDetails>
                  <Timestamp>{conv.timestamp}</Timestamp>
                  <ConversationOptions onClick={handleOpenConvOptions}>
                    <img
                      src="./conversation-options.png"
                      alt=""
                      width="15"
                      height="15"
                    />
                  </ConversationOptions>
                </ConversationDetails>
              </ConversationName>
              <LastMessage>
                <span>{conv.lastMessage}</span>
                {conv.unreadCount > 0 && (
                  <UnreadBadge>{conv.unreadCount}</UnreadBadge>
                )}
              </LastMessage>
            </ConversationInfo>
          </ConversationItem>
        ))}
      </ConversationList>
    </Sidebar>
  );
};

export default ConversationListComponent;
