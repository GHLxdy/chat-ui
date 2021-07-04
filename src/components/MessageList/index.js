import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ChatList } from "./style";
import messageData from "data/messages";
import FilterList from "components/FilterList";
import MessageCard from "components/MessageCard";

function MessageList({ children, ...rest }) {
  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={["最新消息优先", "在线好友优先"]}
        actionLabel="创建会话"
      >
        <ChatList>
          {messageData.map((message, index) => (
            <MessageCard
              key={message.id}
              active={index === 3}
              replied={message.replied}
              avatarSrc={message.avatarSrc}
              name={message.name}
              avatarStatus={message.status}
              statusText={message.statusText}
              time={message.time}
              message={message.message}
              unreadCount={message.unreadCount}
            />
          ))}
        </ChatList>
      </FilterList>
    </StyledMessageList>
  );
}

MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
