import React from "react";
import moment from 'moment';
import { useControllableProp, useControllableState } from '@chakra-ui/react'
import {
  Flex,
  VStack,
  HStack,
  Image,
  Text,
  Box,
  Button,
  Square,
  Center,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, TimeIcon } from "@chakra-ui/icons";
import type { User } from "../api/fetchUser";

type Props = {
  user: User;
};

export const UserCard = ({ user }: Props) => {
  const [value, setValue] = React.useState(1)
  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange: setValue,
  })

  return (
    <Flex
      boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;"
    >
      <VStack flex={1} direction={"column"}>
        <Square color="white" p={8} borderColor="white">
          <Image
            borderRadius="full"
            boxSize="150px"
            src={user.picture.large}
            alt={user.name.first}
            p={5}
          />
          <Text fontSize="1.5rem" fontWeight="bold" color="orange">
            {user.name.title} {user.name.first} {user.name.last}
          </Text>
        </Square>

        <Box>
          <Center paddingBottom={4}>
            Age:  {user.dob.age}  {user.location.city} / {user.location.country}
          </Center>
          <Box p={3}  >
            <PhoneIcon boxSize={8} color='orange.500' />
            <Text p={2} display="inline-block">{user.phone}</Text>
          </Box>
          <Box p={3} >
            <EmailIcon boxSize={8} color='orange.500' />
            <Text p={2} display="inline-block">{user.email}</Text>
          </Box>
          <Box p={3} >
            <TimeIcon boxSize={8} color='orange.500' />
            <Text p={2} display="inline-block">{moment().format(user.dob.date).slice(0, 10)}</Text>
          </Box>
        </Box>
       
      </VStack>
    </Flex>
  );
};
