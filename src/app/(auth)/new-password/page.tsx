import { SupabaseNewPasswordView } from 'src/sections/auth/jwt';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Change Password',
};

export default function LoginPage() {
  return <SupabaseNewPasswordView />;
}
