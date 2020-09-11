import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const UserForm = (props) => {
  const {
    cancel,
    errors,
    submit,
    submitButtonText,
    elements,
    passwordErrors,
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  function handleCancel(event) {
    event.preventDefault();
    cancel();
  }

  return (
    <React.Fragment>
      <ErrorsDisplay errors={errors} passwordErrors={passwordErrors} />
      <Form onSubmit={handleSubmit}>
        {elements()}
        <Button className="mr-1" variant="primary" type="submit">
          {submitButtonText}
        </Button>
        <Button className="mr-1" variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </Form>
    </React.Fragment>
  );
};

function ErrorsDisplay({ errors, passwordErrors }) {
  let errorsDisplay = null;

  if (errors.lenght) {
    errorsDisplay = (
      <React.Fragment>
        <ValidationLabel>Errors:</ValidationLabel>
        <ValidationUl>
          {errors.map((error, i) => (
            <li key={i}>{errors}</li>
          ))}
        </ValidationUl>
      </React.Fragment>
    );
  } else if (!passwordErrors) {
    errorsDisplay = (
      <React.Fragment>
        <ValidationLabel>Errors:</ValidationLabel>
        <ValidationUl>{<li>Password must match</li>}</ValidationUl>
      </React.Fragment>
    );
  }
  return errorsDisplay;
}

const ValidationUl = styled.div`
  color: red;
  padding: 15px 0 40px 10px;
`;
const ValidationLabel = styled.h2`
  color: "0069c0";
  font-size: 28px;
`;

export default UserForm;
