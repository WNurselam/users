import React from 'react'
import {
  Flex,
  VStack,
  HStack,
  Image,
  Text,
  Box,
  Button,
  useControllableProp, useControllableState
} from "@chakra-ui/react";
import { useQuery } from 'react-query'
import type { User } from '../api/fetchUser'

type Props = {
  user: User;
};

export const UserCard = ({ user }: Props) => {

  console.log(user);

  return (
    <Flex>
      <Image
        borderRadius='full'
        boxSize='150px'
        src={user.picture.large}
        alt='Dan Abramov'
      />
      <Text fontSize="1.5rem" fontWeight="700">
        {user.name.title} {user.name.first}  {user.name.last}
      </Text>
    </Flex>
  )
}




