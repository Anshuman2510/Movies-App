import React from 'react'
import Genre from './Genre'
import Movies from "./Movies"
import {Container, Stack} from "react-bootstrap"
import { MovieProvider } from '../Context/MoviesContext'
function Main() {
  return (
    // <Stack direction="horizontal" gap={3}>
    //     <Genre></Genre>
    //     <Movies></Movies>
    // </Stack>

    <Container className='d-flex'>
      <MovieProvider>
        <Genre></Genre>
      
        <Movies></Movies>
      </MovieProvider>
    </Container>
  )
}

export default Main