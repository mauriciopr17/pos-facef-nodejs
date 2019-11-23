function checaIdade( idade ){
    
    return new Promise((resolve, reject) => {

        if ( idade >= 18) {
            
            return resolve("Resolveu!!!");
            

        }else{
            return reject("Não resolveu!!!");
        }

        
    }
)
    
}

/*
checaIdade(20)
    //.then(function(){
    .then(function(resolve){
        console.log("Maior que 18 anos. " + resolve)
    })
    .catch(function(){
        console.log("Menor que 18 anos. ")
    }
);

*/
setTimeout(() => checaIdade(20)
                //.then(function(){
                .then(function(resolve){
                    console.log("Maior que 18 anos. " + resolve)
                })
                .catch(function(){
                    console.log("Menor que 18 anos. ")
                }
                ), 2000);
