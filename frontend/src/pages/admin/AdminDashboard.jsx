import { useUserContext } from "../../context/UserContext"

export default function AdminDashboard(){
    const {user} = useUserContext()
    return(
        <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{user?.id}</td>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}