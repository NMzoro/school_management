import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import UserApi from "../services/UserApi";
import { FaRegUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";

export default function AdminLayout() {
  const navigate = useNavigate();
  const { authenticated,setUser, setAuthenticated,user,logout: contextLogout } = useUserContext();
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    if(authenticated === true){
      setIsLoading(false)
      UserApi.getUser()
      .then(({ data }) => {
        setUser(data);
        setAuthenticated(true);
      })
      .catch(() => {
        contextLogout();
      });
    }else{
      navigate("/login");

    }
  }, []);

  const logout = async () => {
    UserApi.logout().then(() => {
      contextLogout();
      navigate("/login");
    });
  };
  if(isLoading){
    return <></>
  }
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h4>School Management</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin/users">Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin/settings">Settings</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid d-flex justify-content-between">
            <form className="d-flex">
              <input type="search" placeholder="Search..." className="form-control me-2" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-black" to="/admin/dashboard"><MdDashboard/> Dashboard</Link>
              </li>
              <li className="nav-item dropdown">
                <button 
                  className="nav-link dropdown-toggle" 
                  id="userDropdown" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  <FaRegUser /> {user?.name}
                </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li><hr className="dropdown-divider" /></li>
                <li><button onClick={logout} className="dropdown-item"> <CiLogout /> Logout</button></li>
              </ul>
            </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
