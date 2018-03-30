export let state;


export function managePets(state={pets:[]}, action){
  switch(action.type){
    case "ADD_PET":
      return {
        ...state,pets:[...state.pets,action.pet]
      }
    case "REMOVE_PET":
      const newArray=[]
      const addToArray=state.pets.forEach((pet)=>{
        if (pet.id !== action.id){
          newArray.push(pet)
        }
      })
      return {...state, pets:newArray}
    default:
      return state
  }
}

export function dispatch(action){
  state=managePets(state,action)
  render()
}

export function render(){
  let container=document.getElementById("container")
  let list=state.pets.map((pet)=>{
    return `<li>${pet.name}</li>`
  }).join(' ')
  container.innerHTML= `<ul>${list}</ul>`

}
