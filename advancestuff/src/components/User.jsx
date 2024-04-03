import { useContext } from "react"
import { UserContext } from "../Context/Context"




const User = () => {
  const [User,SetUser]=useContext(UserContext);

  return (
    <div>
       <h1 className="text-4xl p-10 font-semibold">
        UserList
      
        </h1>
       {User.map(user=>{
        return(
          
          <div  className="flex flex-col gap-2  p-10" key={user.id}>
            <h1 className="bg-red-500 w-40 h-14">{user.name}</h1>
            <h1 className="bg-red-500 w-40 h-14">{user.email}</h1>
          </div>
        )
       })}

        
          </div>
  )
}

export default User 