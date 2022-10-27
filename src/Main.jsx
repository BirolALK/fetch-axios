import axios from "axios"
import { useEffect, useState } from "react"

const Main = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios ("http://jsonplaceholder.typicode.com/users")
        .then((item) => setUsers(item.data))
    },[]);
  return (
    <div>
        <h1>İsimler</h1>
        {users.map((x) => (
            <div key= {x.id}>{x.name}</div>
        ))}
    </div>
  )
}

export default Main;