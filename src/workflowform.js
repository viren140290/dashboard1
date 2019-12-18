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
      <div className="container float-left">
        <div className="row">
        <Form.Group className="col-4" controlId="formWorkFlowName">
          <Form.Label>Workflow Name</Form.Label>
            <Form.Control type="text" placeholder="Workflow" />
          <Form.Text className="text-muted">
            Use a descriptive name.
          </Form.Text>
        </Form.Group>
        </div>
      </div>
      {
        element.map(function(name, index){
        return (
          <div className="container float-left">
            <div className="row">
              <Form.Group className="col-4" controlId={"password" + name.id}>
                <Form.Label >Sub Workflow Name</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="col-2" controlId={name.id}>
                <Form.Label >Hours</Form.Label>
                <Form.Control type="text" placeholder="0"/>
              </Form.Group>
              <Form.Group className="col-2" controlId={name.id}>
                <Form.Label >Mins</Form.Label>
                <Form.Control type="text" placeholder="0" />
              </Form.Group>
              <Form.Group className="col-1 d-flex align-items-end flex-column" controlId={name.id}>
                <Button className="mt-auto" onClick={incrementCounter} variant="primary">+</Button>
              </Form.Group>
            </div>
          </div>
      )})}
    <div className="inline-block">
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  </Form>
  )
};

export default WorkFlowForm;
