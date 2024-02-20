import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./Components/NavBar"


function App() {

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,
  }}>
    <GridItem area='nav'>Nav
    <NavBar/>
    </GridItem>
    <Show above="lg">
    <GridItem area='aside' bg='gold'>Aside</GridItem>
    </Show>
    <GridItem area='main' bg='dodgerblue'>Mian</GridItem>
  </Grid>

}

export default App
