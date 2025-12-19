import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveConversation,
  deleteConversation,
} from "@/app/store/chat/slices/chatSlice";

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
  ConversationOptionsMenu,
  Timestamp,
  LastMessage,
  UnreadBadge,
} from "./styles";

const ConversationListComponent = () => {
  const dispatch = useDispatch();
  const { conversations, activeConversationId } = useSelector(
    (state) => state.chat
  );

  const [search, setSearch] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);

  const chatMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatMenuRef.current && !chatMenuRef.current.contains(event.target)) {
        setOpenMenuId(null);
      }
    };

    if (openMenuId !== null) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openMenuId]);

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpenConvOptions = (convId, event) => {
    event.stopPropagation();

    setOpenMenuId((prev) => (prev === convId ? null : convId));
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <h2>Messages</h2>
        <SearchWrapper>
          <SearchIcon src="./src/shared/icons/search.svg" />
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
                  <ConversationOptions
                    onClick={(event) => handleOpenConvOptions(conv.id, event)}
                  >
                    <img
                      src="./src/shared/icons/conversation-options.png"
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

            {openMenuId === conv.id && (
              <ConversationOptionsMenu ref={chatMenuRef}>
                <button
                  onClick={() => {
                    dispatch(deleteConversation(conv.id));
                  }}
                >
                  Delete Chat
                </button>
              </ConversationOptionsMenu>
            )}
          </ConversationItem>
        ))}
      </ConversationList>
    </Sidebar>
  );
};

export default ConversationListComponent;
