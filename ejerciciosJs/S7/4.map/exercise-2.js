const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const usersNames = users.map(function(user) {return user.name});

for(user of usersNames){
    if(user.charAt() === 'A'){
       user = 'Anacleto';
        
    }
    console.log(user)
}

