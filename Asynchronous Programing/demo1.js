function porposol(){
    const promise = new Promise((resolve,reject)=>{
        console.log('Will you marry me?');

        let number = Math.floor(Math.random() * 2);

        if(number < 1){

        setTimeout(()=>{
            resolve('Yes i will');
        },3000)

         }else{
            setTimeout(()=>{
                reject('No i dont')
            })
         }
    });

    return promise;

}

let result = porposol();

result.then(resolve=>{
   console.log(resolve)
})

result.catch(reject=>{
    console.log(reject)
})

