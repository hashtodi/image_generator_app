import { Configuration, OpenAIApi } from "openai";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "./StateProvider";

function useImage(){

  const{prompt} =useContext(StateContext);
  const [url , setUrl] = useState("")

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
  });
  const openai = new OpenAIApi(configuration);
  
 useEffect( ()=>{async function res(){
      const  response = await openai.createImage({
          prompt: prompt,
          n: 1,
          size: "512x512",
        });     
        setUrl(response?.data.data[0].url)
      }
      res()
    },[prompt]  )
    return {url}
}

export default useImage