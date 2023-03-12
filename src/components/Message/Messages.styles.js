import styled from "styled-components";

const StyledMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  height: 400px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MessageLayout = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props?.currentUserId === props?.user_id ? "flex-end" : "flex-start"};
`;

export { StyledMessages, MessageLayout };
