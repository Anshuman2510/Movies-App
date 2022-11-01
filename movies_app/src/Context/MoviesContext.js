import React,{ createContext, useContext,useState,useEffect } from "react";




const MovieContext=createContext();


export function MovieProvider({children}){

    //console.log("children of movieprovider",children);
    
    const [movies,setMovies]=useState([]);
    const [loading,setLoading] =useState(true);
    let [filterGenre,setGenre]=useState([]);
    const [Input,setInput]=useState([]);
    const [movieCount,setCount]=useState(4);
    const [cPage,setPage]=useState(1);
    //const [totalMoviesOnPage,setTotalMovie]=useState();
    //let filteredMovieOnPage;
    

    useEffect(()=>{
        (async function(){
          let response=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c09b0a80bcc417e8db833861cab09e98&language=en-US&page=1");
          response=await response.json();
           
          
          setMovies(response.results);
          //filteredMovieOnPage= response.results;
          setLoading(false);
        })()
      },[])
    

    
    function getGenre(value,id){
        
        console.log("id ",id);

        if(value!=="All Genre")
        {
            

            //console.log("moviesNew",movies);
              let filterMovies= movies.filter((movie)=>movie.genre_ids[0]===id)
                console.log("filterMovies",filterMovies);
                
              //setMovies(filterMovies);
              //filteredMovieOnPage=filterMovies;
              // console.log("filteredMovie1 ",filteredMovie);
              setGenre(filterMovies)
              
        }
        else{
               //filteredMovieOnPage=movies;
          //  console.log("filteredMovie2 ",filteredMovie);
            setGenre('');
        }
         setPage(1);
    }
    
   function handleInput(value)
   {
      if(value==='')
      {
         //filteredMovieOnPage=movies;
         setInput('');
         
      }
      else{
        let text=movies.filter((movie)=>movie.title.toLowerCase().includes(value.toLowerCase()))
         //console.log("text ",text);
         //filteredMovieOnPage=text;
         setInput(text);
      }
       setPage(1);
   }

   const handleCount=(value)=>{
       
     setCount(value);
      setPage(1);
   }

   function totalFilterMovie()
   {
      
          let filteredContent;
          if(movies.length!==0)
          {
          
              filteredContent=movies;
          
              if(Input.length!==0)
              {
                filteredContent=Input;
              }
               
                if(filterGenre.length!==0)
                {
                  filteredContent=filterGenre;
                  
                }
                

              return filteredContent.length;

          }

   }

   function pageSet(pno){
       console.log("page no ",pno);
      setPage(pno);
   }

   function onDelete(movie_id){
      let movieToBeNotDeleted=movies.filter((movie)=>(
        movie.id!==movie_id
      ))
       
      setMovies([...movieToBeNotDeleted]);

   }
    
    return(

        <MovieContext.Provider value={{movies,getGenre,loading,filterGenre,handleInput,Input,movieCount,handleCount,totalFilterMovie,pageSet,cPage,onDelete}}>
            {children}
      </MovieContext.Provider>

    )
    
}

export default MovieContext;