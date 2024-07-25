import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



const Forms = () => {
    const [data,setData]=useState();
    const [newData,setNewData]=useState('');

    let handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        setNewData(data);
    }

  return (
      <div className='w-50 m-auto mt-5'>
        <h1>Registration Form</h1>
        <Form className='mt-5' onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control onChange={handleChange} name="firstName" placeholder="First Name" required />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control onChange={handleChange} name="lastName" placeholder="Last Name" required />
              </Col>
            </Row>
                <Form.Label className='mt-3'>Address</Form.Label>
                <Form.Control onChange={handleChange} name="address" placeholder='1234 Main st.' required />
                <Form.Label className='mt-3'>Email</Form.Label>
                <Form.Control type= "email" onChange={handleChange} name="email" placeholder='Enter your Mail' required />
            <Row className='mb-3 mt-3'> 
                <Col> 
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={handleChange} name="city" placeholder='Enter your City' required />
                </Col>
                <Col> 
                    <Form.Label>State</Form.Label>
                    <Form.Control onChange={handleChange} name="state" placeholder='Enter your State' required />
                </Col>
                <Col> 
                <Form.Label>Pin Code</Form.Label>
                    <Form.Control onChange={handleChange} name="pinCode" placeholder='Enter your Pin Code' required />
                </Col>
            </Row>
            <Button variant="primary" type="submit" className='mt-3 mb-3'>
                Submit
            </Button>
        </Form>

        <h3>{newData.firstName}</h3>
        <h3>{newData.lastName}</h3>
        <h3>{newData.address}</h3>
        <h3>{newData.email}</h3>
        <h3>{newData.city}</h3>
        <h3>{newData.state}</h3>
        <h3>{newData.pinCode}</h3>
        
    </div>
  )
}

export default Forms