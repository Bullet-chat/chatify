import React from "react";
interface Props {
  fetchAgain: boolean;
  setFetchAgain: (args: boolean) => void;
}
function AiChatroom({ fetchAgain, setFetchAgain }: Props) {
  return <div>AiChatroom</div>;
}

export default AiChatroom;
