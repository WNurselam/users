import React from "react";
import moment from 'moment';
import { useControllableProp} from '@chakra-ui/react'
import {
  Flex,
  VStack,
  HStack,
  Image,
  Text,
  Box,
  Button,
  Square,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import type { User } from "../api/fetchUser";

type Props = {
  user: User;
};

export const UserCard = ({ user }: Props) => {

  console.log(user);

  return (
    <Flex
      boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;"
    >

      <VStack flex={1} direction="column">
        <Square color="white" p={10} borderColor="white">
          <Image
            borderRadius="full"
            boxSize="150px"
            src={user.picture.large}
            alt={user.name.first}
            p={5}
          />
          <Text fontSize="1.5rem" fontWeight="bold">
            {user.name.title} {user.name.first} {user.name.last}
          </Text>
        </Square>
        <Box p={5}>
          <PhoneIcon boxSize={6} /> {user.phone}
        </Box>
        <Box>
          Age:  {user.dob.age}
        </Box>
        <Box>
          <EmailIcon boxSize={6} /> {user.email}
        </Box>
        <Box>
          {moment().format(user.dob.date).slice(0, 10)}
        </Box>
        <Box>
          {user.location.city} / {user.location.country}
        </Box>

        <Button  m="5" p="5" color="red"  >Next User</Button>
      </VStack>
    </Flex>
  );
};
