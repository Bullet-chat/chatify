import axios from "axios";
interface UserProps {
  searchText: string;
  user: any;
}
export const SearchContacts = async (data: UserProps) => {
  const { searchText, user } = data;

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  return await axios
    .get(
      `${import.meta.env.VITE_BACKEND_API}/api/user?search=${searchText}`,
      config
    )
    .then((res) => res.data);
};
