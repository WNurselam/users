import { Flex, Text, Center, Grid, Image } from "@chakra-ui/react"
import { useQuery } from 'react-query'
import { fetchUser } from './api/fetchUser'
import { UserCard } from "./components/UserCard"



function App() {

  const { isLoading, data } = useQuery({
    queryFn: fetchUser,
  })

  if (isLoading) {
    return <Text>Api İs Loading...</Text>
  }

   //console.log(data?.results)
  return (
    <Center mt="3rem">
      <Grid templateColumns="repeat(1,1fr)" gap={3}>
        {
          data?.results.map((user,index)=>(
            <UserCard user={user} key={index} />
          ))
        }
      </Grid>
    </Center>
  )
}

export default App
