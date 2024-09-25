import { FaSearch } from "react-icons/fa";

import { Container, Content} from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <Content>
        <h1>Dashboard</h1>

        <input type="text" placeholder="Insert Here" />

        <button>Buscar <FaSearch /></button>
      </Content>
    </Container>
  )
}