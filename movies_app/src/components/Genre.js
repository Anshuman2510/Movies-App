import React, { useContext,useEffect } from 'react'
import {Card, ListGroup,Spinner} from "react-bootstrap";
import ContentContext from "../Context/ContentContext"
import MovieContext from '../Context/MoviesContext';
function Genre() {
  //const {GetGenre}=useContext(ContentContext);
  //GetGenre();
  const {loading,content,setLoading,setContent}=useContext(ContentContext);
  const {getGenre}=useContext(MovieContext);
  console.log("Hi genre getting re-rendred");
  useEffect(function (){
    (async function (){
       let response=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c09b0a80bcc417e8db833861cab09e98&language=en-US");
       response=await response.json();

      
       setContent(response);
       setLoading(false);
    })()
},[])

  return (
    <Card style={{ width: '12rem' }}  className="ms-3 mw  d-none d-md-block d-xl-block ">
      <ListGroup variant="flush" className="setHeight">
        <ListGroup.Item onClick={(e)=>getGenre(e.target.textContent,content.genres.id)}>All Genre</ListGroup.Item>
        {
            loading===true ? <Spinner animation="border" variant="primary" />
            : content.genres.map((genre)=>(
              <ListGroup.Item onClick={(e)=>getGenre(e.target.textContent,genre.id)} key={genre._id}>{genre.name}</ListGroup.Item>
            ))
        }
        
        
      </ListGroup>
    </Card>
  )
}

export default Genre