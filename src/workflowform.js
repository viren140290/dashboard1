import React, {useState}  from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function WorkFlowForm() {

  const [element, setElementNo] = useState([{id: 0}])

  let formElements = [1,2,3]

  const createElements = () => {
  // let formElements = []

  // Outer loop to create parent
      for (let i = 0; i < element; i++) {
        let children = []
        let controlIdentifier = "formBasicPassword" + i
        let controlCheckbox = "formBasicCheckbox" + i

        children.push(
          <div>
            <Form.Group controlId={controlIdentifier}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId={controlCheckbox}>
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </div>
        )
        //Create the parent and add the children
        formElements.push({children})
      }
      return formElements
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
      // let list = []
      // for(i = 0; i < element; i++) {
      //   list.push(<div><Form.Group controlId={name}>
      //     <Form.Label>Password</Form.Label>
      //     <Form.Control type="password" placeholder="Password" />
      //   </Form.Group>
      //   <Form.Group controlId={name}>
      //     <Form.Check type="checkbox" label="Check me out" />
      //   </Form.Group></div>)
      // }
      // return list
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
        </div>
    )})}
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
};

export default WorkFlowForm;
