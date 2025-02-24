import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext'
import { Api } from '../../services/api'

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
})

function Login() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  })
  const { setAuthenticated, authenticated } = useUserContext()
  const navigate = useNavigate()

  const submit = async (data) => {
    try {
      const response = await Api.login(data);
      console.log("Réponse de l'API login:", response);  
  
      if (response.status === 204) {
        setAuthenticated(true);
        console.log("✅ Login réussi !");
        navigate("/dashboard/admin");
      } else {
        console.log("⛔ Erreur lors de la connexion :", response.status);
      }
    } catch (error) {
      console.error("❌ Erreur lors de la connexion :", error);
    }
  };
  
  
  

  useEffect(() => {
    if (authenticated) {
      console.log("Authenticated state:", authenticated)
      navigate('/dashboard/admin')
    }
  }, [authenticated, navigate])

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="form-group">
        <label htmlFor="email">Email : </label>
        <input type="text" className="form-control" {...register('email')} />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password : </label>
        <input type="password" className="form-control" {...register('password')} />
        {errors.password && <p className="text-danger">{errors.password.message}</p>}
      </div>
      <button disabled={isSubmitting} type="submit" className="btn btn-primary mt-3">
        {isSubmitting ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Connexion...
          </>
        ) : 'Login'}
      </button>
    </form>
  )
}

export default Login
