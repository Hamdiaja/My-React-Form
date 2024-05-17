import AuthLayout from "../components/Layouts/AuthLayouts.jsx";
import FormRegister from "../components/Fragments/FormRegister.jsx";
const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister />
        </AuthLayout>
    )
}

export default RegisterPage;