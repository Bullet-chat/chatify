import React from "react";
import { Flex, Heading, Text, Icon } from "@chakra-ui/react";
interface HoverBoxProps {
  title: string;
  icon: any;
  description: string;
}
export default function NavHoverBox({
  title,
  icon,
  description,
}: HoverBoxProps) {
  return (
    <>
      <Flex
        pos="absolute"
        mt="calc(100px - 7.5px)"
        ml="calc(200px + 25px)"
        width={0}
        height={0}
        borderTop="10px solid transparent"
        borderBottom="10px solid transparent"
        borderRight="10px solid #2f9c43"
        transform="rotateY(180deg)"
      />
      <Flex
        h={200}
        w="100%"
        flexDir="column"
        alignItems="center"
        justify="center"
        backgroundColor="#2f9c43"
        borderRadius="10px"
        color="#fff"
        textAlign="center"
      >
        <Icon as={icon} fontSize="3xl" mb={4} />
        <Heading size="md" fontWeight="normal" className="font-sofia">
          {title}
        </Heading>
        <Text className="font-sofia">{description}</Text>
      </Flex>
    </>
  );
}
