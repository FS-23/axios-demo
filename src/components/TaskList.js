import axios from 'axios'

let axiosAPI = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com/"
})
function TaskList(){

   // requette classique
  /*const getTasks = ()=>{
      
       axios({
           // url
           url: "https://jsonplaceholder.typicode.com/todos",
           // method : get , post , delete , put , patch...
           method: "get",
           // with params: https://jsonplaceholder.typicode.com/todos? ID= 123&username=Youssef
           params: {
               ID: 123,
               username: "Youssef",
               _limit: 5,
               _start: 5
           },
           // headers
           headers: {

           }
       }).then( response =>  console.log('response:', response.data))
   } */
   

   // best way with axios instance

   // get
   const getTasks = ()=>{
      axiosAPI.get("/todos" , {
          _limit: 5 ,
          _start: 10
      }).then( response =>  console.log('response:', response.data))
   } 

   // post
   const saveTask = ()=>{
        axiosAPI.post('/todos',{
            title: "Learn reactJs" ,
            decription: "Lean react from 3WA" ,
            completed: false
        }).then( response =>  console.log('response:', response.data))
   }


   // delete
   const deleteTask = ()=>{
    axiosAPI.delete("/todos/1").then( response =>  console.log('response:', response.data))
   } 


   // update
   const updateTask = ()=>{
    axiosAPI.patch('/todos',{
        title: "Learn reactJs" ,
        decription: "Lean react from 3WA" ,
        completed: true
    }).then( response =>  console.log('response:', response.data))
        }
   

   getTasks()
   return <h1>Task list</h1>
}
export default TaskList