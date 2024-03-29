import React from "react";
import {
  Form,
  SendButton,
  SendInput,
  StyledAddMessageForm,
} from "./AddMessageForm.styles";

const AddMessageForm = (props) => {
  return (
    <StyledAddMessageForm>
      <Form action="" onSubmit={props.handleSubmit}>
        <SendInput
          placeholder={"Enter message"}
          type="text"
          value={props.message}
          onChange={props.handleMessageChange}
        />
        <SendButton disabled={!props.message} type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-90deg-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
            />
          </svg>
        </SendButton>
      </Form>
    </StyledAddMessageForm>
  );
};

export default AddMessageForm;
