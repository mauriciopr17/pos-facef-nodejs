const users = [
    {
        name: 'Matheus',
        skills: ['JavaScript', 'ReactJs', 'Redux']
    },
    {
        name: 'João',
        skills: ['Python', 'Rust', 'JavaScript']
    }
]

//console.log(users);

for( let i of users){
    
    console.log("O " + i.name + " possui as habilidades " + i.skills.join(", ") );
}

console.log('--------------- Template Strings ---------------');
for( let i of users){
        
    console.log(`O ${i.name} possui as habilidades ${i.skills.join(", ")}`);
}