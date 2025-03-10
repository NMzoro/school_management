import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import UserApi from "../services/UserApi";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup.string().email("Email invalide").required("L'email est requis"),
  password: yup.string().required("Le mot de passe est requis"),
});

export default function Login() {
    const{setAuthenticated} = useUserContext()
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const submit = async (data) => {
    try {
      const response = await UserApi.login(data);
      if (response.status === 204) {
        setAuthenticated(true)
        navigate('/admin/dashboard')
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setError("email", {
          type: "manual",
          message: error.response.data.errors.email.join(),
        });
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>

        <h2 className="text-center mb-4">Connexion</h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-3">
            <label className="form-label">Email :</label>
            <input
              type="text"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Mot de passe :</label>
            <input
              type="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Connexion..." : "Se Connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
