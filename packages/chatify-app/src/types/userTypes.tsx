export interface UsersListProps {
  users: userProps[];
}

export interface userProps {
  email: string;
  isAdmin: boolean;
  name: string;
  pic: string;
  _id: string;
}
