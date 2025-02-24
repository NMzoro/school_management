import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'

function GuestLayout() {
  const navigate = useNavigate()
  const { authenticated } = useUserContext()

  useEffect(() => {
    if (authenticated) {
      navigate("/dashboard/admin");
    }
  }, [authenticated, navigate]); // Ajoute la dépendance `authenticated` pour garantir que la redirection se fait après sa mise à jour
  

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
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container mt-5">
        <Outlet />
      </main>
      <footer className="bg-tertiary text-black text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">© {new Date().getFullYear()} - Tous droits réservés</p>
          <div className="mt-2">
            <a href="#" className="text-light me-3"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-light"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default GuestLayout
