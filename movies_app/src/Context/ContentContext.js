import React ,{ createContext,useState} from "react";

const ContentContext=createContext();

export function ContentProvider({children})
{
    const [content,setContent]=useState([]);
    
    const [loading,setLoading]=useState(true);

    
        // console.log("content genres",content.genres);
        
    
    return(

        <ContentContext.Provider value={React.useMemo(() => ({ loading,content,setContent,setLoading }), [
            loading,content,setContent,setLoading,
          ])}>
            {children}
        </ContentContext.Provider>
    )
}

export default ContentContext;