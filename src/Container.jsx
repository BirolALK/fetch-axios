import { useEffect, useState } from "react"

const Container = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((item) => setUsers(item) )
    }, []);

  return (
    <div>
        <h1>isimler</h1>
        {users.map((x) =>(
            <div key={x.id }>{x.name}</div>
        ))}
    </div>
  )
}

export default Container