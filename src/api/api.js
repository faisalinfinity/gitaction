import axios from "axios";


const Api = async(type,page) => {
    let data;
 if(type==="all"){
    let res =await axios
    .get(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:all&page=${page}&sort:stargazers_count-asc`
    )
   data=await res.data
 }else{
  

   let res =await axios
   .get(
     `https://api.github.com/search/repositories?q=language:${type}&page=${page}&sort:stargazers_count-asc`
   )
  data=await res.data
 }
  
    
    return data
};

export default Api;
