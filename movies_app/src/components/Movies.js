import React from 'react'
import MoviesTable from "./MoviesTable"
import InputBox from './InputBox'
import Page  from './Page'
import { Container, Row,Col } from 'react-bootstrap'
import { MovieProvider } from '../Context/MoviesContext'

function Movies() {
  return (
    <Container>
        
          <InputBox></InputBox>
          <MoviesTable></MoviesTable>
          <Page></Page>
        
      
   </Container>
  )
}

export default Movies