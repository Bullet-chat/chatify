import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { FiMenu, FiHome, FiCalendar, FiBell } from "react-icons/fi";
import { BellIcon } from "@chakra-ui/icons";
import NavItem from "./navItem";
import { ChatState } from "../../Context/ChatProvider";
import ProfileModal from "../miscellaneous/ProfileModal";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import { getSender } from "../../config/ChatLogics";
export default function Sidebar() {
  const [navSize, changeNavSize] = useState("small");
  const { user, notification, setNotification, setSelectedChat } = ChatState();

  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
          aria-label="Navbutton"
        />
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          description="This is the description for the dashboard."
          active
        />
        <Menu>
          <MenuButton p={1}>
            <NotificationBadge
              count={notification.length}
              effect={Effect.SCALE}
            />
            <NavItem
              active={false}
              navSize={navSize}
              icon={FiBell}
              title="Notification"
            />
          </MenuButton>
          <MenuList pl={2}>
            {!notification.length && "No New Messages"}
            {notification.map((notif: any) => (
              <MenuItem
                key={notif._id}
                onClick={() => {
                  setSelectedChat(notif.chat);
                  setNotification(notification.filter((n: any) => n !== notif));
                }}
              >
                {notif.chat.isGroupChat
                  ? `New Message in ${notif.chat.chatName}`
                  : `New Message from ${getSender(user, notif.chat.users)}`}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <ProfileModal user={user}>
          <Flex mt={4} align="center" className="cursor-pointer">
            <Avatar
              size="sm"
              src={user.pic}
              style={{ borderWidth: "1px", borderColor: "gray" }}
            />

            <Flex
              flexDir="column"
              ml={4}
              display={navSize == "small" ? "none" : "flex"}
            >
              <Heading as="h3" size="sm">
                {user.name}
              </Heading>
              <Text color="gray">{user.isAdmin ? "Admin" : "Member"}</Text>
            </Flex>
          </Flex>
        </ProfileModal>
      </Flex>
    </Flex>
  );
}
