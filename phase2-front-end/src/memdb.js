let people = [
    {
    name: "spongebob ",
    email: "chris.@chris.com",
    password: "rainbows",
    id: "0"
    },
    {
    name: "bob smith",
    email: "bob.smith@poolhouse.com",
    password: "sunshine",
    id: "1"
    }
]

export function returnsCustomers(){
    return people;
}

export function get(id) {
    let result = null;
    for( let item of people){
        if(item.id === id){
            result = item;
        }
    }
  return result;
}

export function deleteById(id) {
  let arrayIndex = getArrayIndexForId(id);
  if( arrayIndex >= 0 && arrayIndex < people.length){
    people.splice(arrayIndex,1);
  }
}

export function post(item) {
  let nextid = getNextId();
  console.log("nextid: " + nextid);
  item.id = nextid;
  people[people.length] = item;
}

export function put(id, item) {
  for( let i = 0; i < people.length; i++){
    if(people[i].id === id){
      people[i] = item;
      return;
    }
  }
}

function getArrayIndexForId(id){
  for( let i = 0; i < people.length; i++){
    if(people[i].id === id){
      return i;
    }
  }
  return -1;  
}


function getNextId(){
  let maxid = 0;
  for( let item of people){
    maxid = (item.id > maxid)?item.id:maxid;
  }  
  return maxid + 1;
}


