import React, {useState}  from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function WorkFlowForm() {

  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter(counter + 1);
    setElementNo(counterMap());
  }

  const counterMap = () => {
    let counterList = [];
    let i;
    for(i = 1; i <= counter; i++ ) {
      counterList.push({id: i})
    }
    return counterList;
  }

  const [element, setElementNo] = useState(counterMap)

  let formElements = [1,2,3];

  const addWorkFlowElements = () => {

  }


  return (
    <Form className="workFlowForm">
    <Form.Group controlId="formWorkFlowName">
      <Form.Label>Workflow Name</Form.Label>
      <div className="wokflowName col-md-5">
        <Form.Control type="text" placeholder="Workflow" />
      </div>
      <Form.Text className="text-muted">
        Use a descriptive name.
      </Form.Text>
    </Form.Group>
    {
      element.map(function(name, index){
      return (
        <div>
          <Form.Group className="d-inline-block p-2" controlId={name.id}>
            <Form.Label >Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="d-inline-block p-2" controlId={name.id}>
            <Form.Label >Check me out</Form.Label>
            <Form.Check type="checkbox" />
          </Form.Group>
          <Form.Group className="d-inline-block p-2" controlId={name.id}>
            <Button onClick={incrementCounter} variant="primary">+</Button>
          </Form.Group>
        </div>
    )})}
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
};

export default WorkFlowForm;
