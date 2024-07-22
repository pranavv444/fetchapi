fetch('https://jsonplaceholder.typicode.com/comments').then(response=>{
    if(!response.ok){
        throw new Error('Network not responding');
    }
    return response.text();
})
.then(data=>console.log(data))
.catch(error=>console.log(error))