import React, { useRef } from "react";

const sendIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 10L1 1L5 10L1 19L19 10Z"
      stroke="black"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

function ChatPage() {
  const [messages, setMessages] = React.useState([]);
  const [isConnectionOpen, setConnectionOpen] = React.useState(false);
  const [messageBody, setMessageBody] = React.useState("");

  const ws = useRef();

  // sending message function

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

  return (
    <>
      <div>
        <input
          id="message"
          type="text"
          className=""
          placeholder="Type your message here..."
          value={messageBody}
          onChange={(e) => setMessageBody(e.target.value)}
          required
        />
        <button
          aria-label="Send"
          onClick={sendMessage}
          className="m-3"
          disabled={!isConnectionOpen}
        >
          {sendIcon}
        </button>
      </div>
      <div id="chat-view-container" className="">
        {messages.map((message, index) => (
          <div key={index} className={""}>
            <div className="">
              <div className="">
                <div className="">{message.body}</div>
                <div className="">
                  <div className="">{message.sender}</div>
                  <div className="">
                    <div className="">
                      {new Date(message.sentAt).toLocaleTimeString(undefined, {
                        timeStyle: "short",
                      })}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={scrollTarget} />
      </div>
    </>
  );
}

export default ChatPage;
