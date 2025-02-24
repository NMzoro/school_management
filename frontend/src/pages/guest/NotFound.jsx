import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
        <div className="container text-center">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1 className="display-1 fw-bold text-danger">404</h1>
                <p className="fs-4">Oups ! Page introuvable.</p>
                <p className="lead">La page que vous recherchez n'existe pas ou a été déplacée.</p>
                <Link to='/' className="btn btn-primary">Retour à l'accueil</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default NotFound