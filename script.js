fetch('https://jsonplaceholder.typicode.com/posts').then(response=>{
    if(!response.ok){
        throw new Error('Network not responding');
    }
    return response.json();
})
.then(data=>data.forEach(element=>{console.log(element.title)})
.catch(error=>console.log(error)));