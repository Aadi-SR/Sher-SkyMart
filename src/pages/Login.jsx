import BrandPanel from "../components/BrandPanel";
import SignInForm from "../components/SignInForm";

export default function Login() {
  const handleSignIn = ({ email, password }) => {
    // TODO: wire this up to your data-routing / auth logic
    console.log("Sign in attempt:", { email, password });
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-black lg:flex-row">
      <BrandPanel />

      {/* Right side: sign-in form */}
      <div className="flex w-full flex-1 items-center justify-center bg-black px-6 py-16 lg:w-1/2 lg:border-l lg:border-white/10">
        <SignInForm onSubmit={handleSignIn} />
      </div>
    </div>
  );
}