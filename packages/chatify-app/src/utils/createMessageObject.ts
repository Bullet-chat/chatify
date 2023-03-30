import { ChatState } from "../Context/ChatProvider";

interface ObjProps {
  id: string;
  content: string;
  user:any;
  isAi?: boolean;
}
export default function createMessageObject({
  id,
  content,
  user,
  isAi = false,
}: ObjProps) {
  return {
    id,
    isAi,
    content,
    user,
    timeStamp: new Date().toISOString(),
  };
}
