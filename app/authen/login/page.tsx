import { LoginForm } from "@/components/Login";
import { AuthBox } from "@/shared/authBox";

export default function LoginPage() {
  return <AuthBox body={<LoginForm />} width="784px" />;
}
