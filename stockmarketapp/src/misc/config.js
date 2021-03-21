const API_BASE_URL='https://www.alphavantage.co';

export async function apiGet(queryString){
    const response=await fetch(`${API_BASE_URL}${queryString}`)
                    .then(r=>
                        {  console.log("response",r)
                            r.json()});
     console.log(response)                     
    return response;
}