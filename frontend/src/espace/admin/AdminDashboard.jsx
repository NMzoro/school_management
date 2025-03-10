import { useUserContext } from "../../contexts/UserContext";

export default function AdminDashboard() {
    const{user} = useUserContext()
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} à ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
      };
    return (
      <div className="container d-flex justify-content-center mt-4">
        <div className="card shadow p-4" style={{ width: "350px" }}>
          <div className="text-center">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png" 
              alt="Profile"
              className="rounded-circle mb-3"
              width="100"
              height="100"
            />
            <h4 className="mb-2">{user?.first_name}</h4>
            <hr />
            <p className="text-muted">Create Account : {formatDate(user?.created_at)}</p>
          </div>
        </div>
      </div>
    );
  }
  