import React,{useContext} from 'react'
import {Pagination} from "react-bootstrap"
import MovieContext from '../Context/MoviesContext'
function Page() {
  const {movieCount,filteredMovie,filterGenre,movies,totalFilterMovie,pageSet}=useContext(MovieContext);
  
  const totalMoviesOnPage=totalFilterMovie();
  //console.log("totalMoviesOnPage ",totalMoviesOnPage.length);
  const totalPage=Math.ceil(totalMoviesOnPage/movieCount);
  //console.log("totalPage ",totalPage);
   let pageArr=[];
    //const totalPage=2;
   for(let i=1;i<=totalPage;i++)
   {
     pageArr.push(i);
   }

  
  return (
    <Pagination >
      {
         pageArr.map((pno)=>(
            <Pagination.Item onClick={(e)=>pageSet(pno)}>
                {pno}
            </Pagination.Item>
         ))
      }
        

  </Pagination>
  )
}

export default Page