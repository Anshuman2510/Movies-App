import React,{useContext, useEffect} from 'react'
import { Button, Spinner, Stack, Table } from 'react-bootstrap'
import ContentContext from "../Context/ContentContext"
import MovieContext from '../Context/MoviesContext'; 

function MoviesTable() {
  const {movies,getGenre,loading,filterGenre,Input,cPage,movieCount,onDelete}=useContext(MovieContext);
  const {content}=useContext(ContentContext);
  

    // useEffect(()=>{
    //   (async function(){
    //     let response=await fetch("https://react-backend101.herokuapp.com/movies");
    //     response=await response.json();

    //     setMovies(response.movies);
    //   })()
    // },[])
   //filteredContent=getGenre();

  //  let filteredContent=filterGenre;
   
   
    
  //  if(filteredContent.length===0)
  //  {
  //   filteredContent=movies;
  //  }
  
  let filteredContent;
  
  
  if(movies.length!==0)
   {
      
      filteredContent=movies;
   
   
     
        if(filterGenre.length!==0)
        {
           filteredContent=filterGenre;
           console.log("filterGenre ",filterGenre);
        }
           
      if(Input.length!==0)
       {
         filteredContent=Input;
       }

        let sidx= (cPage-1)*movieCount;
            //console.log("sidx ",sidx);
       let eidx=sidx+movieCount;

       filteredContent=filteredContent.slice(sidx,eidx);

    }
  

  

  //  else{
  //   filteredContent=filteredContent;
  //  }
  console.log("movies ",movies);
   console.log("filteredContent ",filteredContent);
   

    
  return (
    loading===true?  <Spinner animation="border" variant="primary" />
    :<Table responsive="md" className='table-auto '>
      <thead>
        <tr>
            <th>#</th>
            <th > Title</th>
            <th>Genre</th>
            <th>popularity</th>
            <th>vote_average</th>
        </tr>
      </thead>
      <tbody>
        {
          filteredContent.map((movie,id)=>(
            //movie.genre_ids[0]
            
            <tr key={id}>
              <td >{id+1}</td>
              <td >{movie.title}</td>
              {
                 content.genres.filter((genre)=>(
                  movie.genre_ids[0]===genre.id ?  true:  false

                )).map((genre)=>(
                  <td >{genre.name}</td>
                ))
        
                
              }
              
              
              <td >{movie.popularity}</td>
              <td >{movie.vote_average}</td>
              
              <td><Button variant="danger" onClick={()=>onDelete(movie.id)}>Delete</Button></td>
              

            </tr>



          ))
        }
        
      </tbody>
    </Table>
    
  )
  
}

export default MoviesTable