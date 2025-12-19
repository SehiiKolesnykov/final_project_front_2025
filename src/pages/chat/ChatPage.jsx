import React from "react";

import { AppContainer } from "./components/common/styles";
import ChatAreaComponent from "./components/chat/ChatAreaComponents";
import ConversationListComponent from "./components/sidebar/ConversationListComponent";

const ChatPage = () => {
  return (
    <AppContainer>
      <ConversationListComponent />
      <ChatAreaComponent />
    </AppContainer>
  );
};

export default ChatPage;
