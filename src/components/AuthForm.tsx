
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Facebook, Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

type AuthFormProps = {
  type: "signin" | "signup";
  onSubmit: (data: {
    email: string;
    password: string;
    name?: string;
  }) => void;
  onGoogleSignIn: () => void;
  onFacebookSignIn: () => void;
  isLoading: boolean;
};

const AuthForm = ({
  type,
  onSubmit,
  onGoogleSignIn,
  onFacebookSignIn,
  isLoading,
}: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      email,
      password,
      ...(type === "signup" && { name }),
    };
    onSubmit(data);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md animate-scaleIn">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-decor-primary mb-2">
          {type === "signin" ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-decor-secondary text-sm">
          {type === "signin"
            ? "Sign in to continue to DecorMind"
            : "Join DecorMind and transform your space"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {type === "signup" && (
          <div className="space-y-2">
            <Label htmlFor="name" className="text-decor-primary">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email" className="text-decor-primary">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-decor-primary">
              Password
            </Label>
            {type === "signin" && (
              <Link
                to="/forgot-password"
                className="text-xs text-decor-accent hover:underline"
              >
                Forgot Password?
              </Link>
            )}
          </div>
          <Input
            id="password"
            type="password"
            placeholder={type === "signin" ? "Enter your password" : "Create a password"}
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        {type === "signin" && (
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              className="border-decor-gray-med data-[state=checked]:bg-decor-accent data-[state=checked]:border-decor-accent"
            />
            <Label
              htmlFor="remember"
              className="text-sm font-normal text-decor-secondary cursor-pointer"
            >
              Remember me
            </Label>
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-decor-accent hover:bg-decor-accent/90"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {type === "signin" ? "Signing in..." : "Creating account..."}
            </>
          ) : (
            type === "signin" ? "Sign In" : "Create Account"
          )}
        </Button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-decor-gray-light"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-decor-secondary">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          type="button"
          variant="outline"
          className="w-full flex items-center justify-center space-x-2 border-decor-gray-light"
          onClick={onGoogleSignIn}
          disabled={isLoading}
        >
          <FcGoogle className="h-5 w-5" />
          <span>Google</span>
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full flex items-center justify-center space-x-2 border-decor-gray-light"
          onClick={onFacebookSignIn}
          disabled={isLoading}
        >
          <Facebook className="h-5 w-5 text-blue-600" />
          <span>Facebook</span>
        </Button>
      </div>

      <div className="mt-6 text-center text-sm">
        {type === "signin" ? (
          <p className="text-decor-secondary">
            Don't have an account?{" "}
            <Link to="/signup" className="text-decor-accent hover:underline">
              Sign up
            </Link>
          </p>
        ) : (
          <p className="text-decor-secondary">
            Already have an account?{" "}
            <Link to="/signin" className="text-decor-accent hover:underline">
              Sign in
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
