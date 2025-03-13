import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router";

export default function SignUp() {

  const { isAuthenticated } = useContext(AuthContext) as { isAuthenticated: boolean }

  if (isAuthenticated) {
    return <Navigate to={"/"} />
  }

  return (
    <>
      <PageMeta
        title="React.js SignUp Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js SignUp Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
