import React, { useContext } from 'react'
import { Container, Form, InputGroup, Row,Col } from 'react-bootstrap'
import MovieContext from '../Context/MoviesContext'
{/* <Container>
       <Row>
          <Col><input className="border rounded py-1 px-1 mx-2 font-bold"
            type="text" ></input></Col>
          <Col><input type="number" className="border rounded py-1 px-1 mx-2 font-bold"
            ></input></Col>
       </Row>

      </Container> */}

function InputBox() {
  const {handleInput,handleCount} =useContext(MovieContext)
  return (
    <InputGroup className="mb-3 " size={{width:"211px"}} >
    <InputGroup className="input" >
      <Form.Control onChange={(e)=>handleInput(e.target.value)} className="input-margin"
        placeholder="Search Movie"
        aria-label="Search Movie"
        aria-describedby="basic-addon1"
      />
      <Form.Control onChange={(e)=>handleCount(e.target.value)}
        placeholder="movie number"
        aria-label="movie number"
        aria-describedby="basic-addon1"
        type='number'
      />
  </InputGroup>
  </InputGroup>




      
  )
}

export default InputBox