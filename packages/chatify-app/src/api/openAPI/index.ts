import axios from "axios";

interface BotProps {
  prompt?: string;
  user: any;
}

export async function getAIResponse(data: BotProps) {
  //Here we post the our questions to the OpenAPI sections.
  const { prompt, user } = data;
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  return await axios
    .post(
      `${import.meta.env.VITE_BACKEND_API}/api/chatwithai`,
      {
        prompt,
      },
      config
    )
    .then((res) => res.data);
}
