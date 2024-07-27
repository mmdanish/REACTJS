import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Registration = () => {
    const [data, setData] = useState();
    const [newData, setNewData] = useState('');
    const [toggle, setToggle] = useState(true);
    const [errorMsg, setErrorMsg] = useState('')

    let handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value});
    }

    let handleRegister = (e) => {
        e.preventDefault();
        setNewData(data)
        console.log(data);
        if (data.password != data.confirmPassword) {
            console.log("Password Mismatch");
            setErrorMsg("Password Mismatch!");
            return;
        }
        setErrorMsg('');
    }

    let toggled = () => {
        setToggle(!toggle);
        setErrorMsg('');
    }

  return (
    <>
    {toggle ?
    (<div className='w-50 m-auto mt-5'>
        <h3 className='mb-5 fw-bolder text-center text-decoration-underline'>Login</h3>
        <Form>
            <Row>
                <Col>
                    <Form.Label className='fw-bold'>Username</Form.Label>
                    <Form.Control placeholder='Enter your Username' required />
                </Col>
                <Col>
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter your Password' required />
                </Col>
            </Row>
            <div className='mt-5 d-flex justify-content-center gap-3'>    
                <input type='submit' className='btn btn-success px-3 ' value='Login'/>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <span className='d-flex align-items-center'>Don't have an Account. 
                    <input type='submit' className='btn' style={{textDecoration: 'underline'}} onClick={toggled} value='Register'/>
                </span>

            </div>
              
        </Form>
    </div>) :

    (<div className='w-50 m-auto mt-5'>
        <h1 className='text-center text-decoration-underline'>Registration Form</h1>
        <Form onSubmit={handleRegister}>
            <Form.Label className='mt-5 fw-bold'>Username</Form.Label>
            <Form.Control onChange={handleChange} name='username' placeholder='Enter your username' required/>
            <Form.Label className='mt-3 fw-bold'>Email</Form.Label>
            <Form.Control onChange={handleChange} type='email'name='email' placeholder='Enter your mail'required/>
            <Form.Label className='mt-3 fw-bold'>Password</Form.Label>
            <Form.Control onChange={handleChange} type='password'name='password' placeholder='Enter your password'required/>
            <Form.Label className='mt-3 fw-bold'>Confirm Password</Form.Label>
            <Form.Control onChange={handleChange} type='password' name='confirmPassword' placeholder='Re-Enter your password'required/>
            <div style={{color: 'red'}}>{errorMsg}</div>
            <div className='m-auto mt-5 d-flex justify-content-center gap-2'>
                <input type='submit' className='btn btn-dark' value='Register'/>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <span className='d-flex align-items-center'>Already have an Account. 
                    <input type='submit' className='btn' style={{textDecoration: 'underline', color: 'blue'}} onClick={toggled} value='Login'/>
                </span>

            </div>
        </Form>
    </div>)
    }
    </>
    
  )
}

export default Registration