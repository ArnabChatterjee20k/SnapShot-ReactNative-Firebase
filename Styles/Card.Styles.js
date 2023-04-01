import styled from "styled-components";

const box = styled.View`
  flex-direction: row;
  width: 100%;
`;
export const Card = styled(box)`
  border-radius: 10px;
  flex-direction: column;
  background-color: #f6f1e9;
`;

export const Header = styled(box)`
  align-items: center;
  gap: 8px;
  padding: 15px 20px;
`;

export const HeaderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const HeaderSubText = styled.Text`
  font-size: 12px;
  color: gray;
`;

export const Content = styled.View`
  padding: 0px 20px;
`;
