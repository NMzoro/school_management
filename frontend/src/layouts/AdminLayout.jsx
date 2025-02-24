import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'
import { Api } from '../services/api'

function AdminLayout() {
  const navigate = useNavigate()
  const { setUser, setAuthenticated, logout: contextLogout, user,authenticated } = useUserContext()

  useEffect(() => {
    console.log("🔄 Vérification de l'authentification...");
    if (!authenticated) {
      console.log("⛔ Utilisateur non authentifié, redirection vers login");
      navigate("/login");
      return;
    }
  
    Api.getUser()
      .then(({ data }) => {
        console.log("✅ Utilisateur récupéré :", data);
        setUser(data);
        setAuthenticated(true);
      })
      .catch((error) => {
        console.error("🚨 Erreur API /api/user:", error);
        contextLogout();
        navigate("/login");
      });
  }, []);
  
  
  
  

  const logoutCallback = async () => {
    return Api.logout().then(() => {
      contextLogout()
      navigate('/login')
    })
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">School Management</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {user?.name}
                </a>
                <ul className="dropdown-menu">
                  <li><button onClick={logoutCallback} className="dropdown-item">Logout</button></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="d-flex">
        <div className="bg-dark text-white p-3" style={{ width: '250px', height: '100vh' }}>
          <h4>Menu</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">À propos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="container-fluid p-4">
          <Outlet />
        </div>
      </div>

      <footer className="bg-tertiary text-black text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">© {new Date().getFullYear()} - Tous droits réservés</p>
        </div>
      </footer>
    </>
  )
}

export default AdminLayout
