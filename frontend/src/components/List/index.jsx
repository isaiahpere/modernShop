import styled from "styled-components";

import Card from "../GlobalStyles/Card";
import { featuredData } from "../../utilities/data/featuredData";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
`;

const List = ({ category, sort }) => {
  return (
    <Container>
      {featuredData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default List;
