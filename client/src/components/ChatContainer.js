import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { GiClick } from "react-icons/gi";

// import img from "../assets/background.avif";

const BackgroundLayout = styled.div`
  background-image: url(${`https://images.unsplash.com/photo-1653324101493-254c64719ba9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80`});
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessangerContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 700px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
`;

const MessangerHeader = styled.div`
  background-color: red;
  border-radius: 50px 50px 0 0;
`;
const MessangerContent = styled.div`
  flex-grow: 2;
  border-radius: 50px 50px 0 0;
  display: flex;
  flex-direction: column;
  aling-items: end;
  padding: 20px;
  gap: 25px;
  overflow-y: scroll;
`;

const UserMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const MessageSentDate = styled.div`
  font-size: 13px;
  color: #919ade;
`;

const UserMessage = styled.div`
  padding: 10px 20px;
  width: fit-content;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 25px 25px 2px 25px;
  max-width: 300px;
  word-break: break-all;
`;

const MessangerControls = styled.div`
  background-color: #fff;
  border-radius: 0 0 50px 50px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0 25px 0;
  margin: 0 auto;
  width: 100%;
  max-width: 350px;

  position: relative;
`;

const Input = styled.input`
  border: 1px solid #f6f8fe;
  width: 100%;
  height: 30px;
  padding: 25px 25px;
  border-radius: 50px;
  outline: none;
  background-color: #f6f8fe;

  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  &:focus {
    border-color: #4459f2;
    transition: border-color 0.3s ease-in-out;
    outline: 0;
  }
`;

const InputButton = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  padding: 5px 10px;
  background-color: #4459f2;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 5px;
`;

const ChatContainer = () => {
  const [messages, setMessages] = React.useState([]);
  const [isConnectionOpen, setConnectionOpen] = React.useState(false);
  const [messageBody, setMessageBody] = React.useState("");

  const ws = useRef();

  const sendMessage = () => {
    if (messageBody) {
      ws.current.send(
        JSON.stringify({
          sender: "",
          body: messageBody,
        })
      );
      console.log(messageBody);
      setMessageBody("");
    }
  };

  React.useEffect(() => {
    ws.current = new WebSocket("ws://192.168.1.41:8080");

    ws.current.onopen = () => {
      console.log("Connection opened");
      setConnectionOpen(true);
    };

    ws.current.onmessage = (event) => {
      console.log(event);
      const data = JSON.parse(event.data);
      setMessages((_messages) => [..._messages, data]);
    };

    return () => {
      console.log("Cleaning up...");
      ws.current.close();
    };
  }, []);

  const scrollTarget = useRef(null);

  React.useEffect(() => {
    if (scrollTarget.current) {
      scrollTarget.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages.length]);

  const bottomRef = useRef(null);
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <BackgroundLayout>
      <MessangerContainer>
        {/* <MessangerHeader>2</MessangerHeader> */}

        <MessangerContent>
          {messages.map((message, index) => (
            <UserMessageContainer>
              <UserMessage>{message.body}</UserMessage>

              <MessageSentDate>
                {new Date(message.sentAt).toLocaleTimeString(undefined, {
                  timeStyle: "short",
                })}
              </MessageSentDate>
            </UserMessageContainer>
          ))}
          {messageBody && (
            <UserMessageContainer>
              <UserMessage>{messageBody}</UserMessage>
            </UserMessageContainer>
          )}

          <div ref={bottomRef} />
        </MessangerContent>
        <MessangerControls>
          <InputContainer>
            <Input
              placeholder="Type a message..."
              value={messageBody}
              onChange={(e) => setMessageBody(e.target.value)}
            />
            <InputButton onClick={sendMessage} disabled={!isConnectionOpen}>
              Send
              <GiClick />
            </InputButton>
          </InputContainer>
        </MessangerControls>
      </MessangerContainer>
    </BackgroundLayout>
  );
};

export default ChatContainer;
