import { Flex, Text, Center, Grid, Button, Box } from "@chakra-ui/react"
import { useQuery } from 'react-query'
import { fetchUser } from './api/fetchUser'
import { UserCard } from "./components/UserCard"

function App() {

  const { isLoading, data: users } = useQuery({
    queryFn: fetchUser,
  })

  if (isLoading) {
    return <Text>Api İs Loading...</Text>
  }

  return (
    <Center m="4rem">
      <Grid templateColumns="repeat(1,1fr)" gap={1}>
        {
          users?.results.map((user, index) => (
            <UserCard user={user} key={index} />
          ))
        }
      </Grid>
    </Center>
  )
}

export default App
