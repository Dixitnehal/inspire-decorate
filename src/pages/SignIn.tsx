
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/context/AuthContext";

const SignIn = () => {
  const { signIn, signInWithGoogle, signInWithFacebook, isLoading } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (data: { email: string; password: string }) => {
    signIn(data.email, data.password);
  };

  return (
    <div className="min-h-screen flex flex-col bg-decor-light/50">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="w-full max-w-md px-4">
          <AuthForm
            type="signin"
            onSubmit={handleSubmit}
            onGoogleSignIn={signInWithGoogle}
            onFacebookSignIn={signInWithFacebook}
            isLoading={isLoading}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignIn;
