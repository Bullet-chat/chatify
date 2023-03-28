import React from "react";
interface ConversationProps {
  data: Array<any>;
}
export function ChatConversation({ data }: ConversationProps) {
     console.log(data)
  return <div>ChatConversation</div>;
}
