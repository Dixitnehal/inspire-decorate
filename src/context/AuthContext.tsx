
import { createContext, useState, useContext, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

type User = {
  id: string;
  email: string;
  name?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // For demo purposes, we'll simulate authentication
  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email && password) {
        // Simulate successful login
        setUser({
          id: "user123",
          email,
          name: email.split('@')[0],
        });
        
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        });
        
        navigate("/");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      toast({
        title: "Sign in failed",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email && password && name) {
        // Simulate successful registration
        setUser({
          id: "user123",
          email,
          name,
        });
        
        toast({
          title: "Account created",
          description: "Your account has been created successfully.",
        });
        
        navigate("/");
      } else {
        throw new Error("Please fill in all fields");
      }
    } catch (error) {
      toast({
        title: "Sign up failed",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
    navigate("/signin");
  };

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful Google sign in
      setUser({
        id: "google123",
        email: "user@gmail.com",
        name: "Google User",
      });
      
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in with Google.",
      });
      
      navigate("/");
    } catch (error) {
      toast({
        title: "Google sign in failed",
        description: "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithFacebook = async () => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful Facebook sign in
      setUser({
        id: "facebook123",
        email: "user@facebook.com",
        name: "Facebook User",
      });
      
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in with Facebook.",
      });
      
      navigate("/");
    } catch (error) {
      toast({
        title: "Facebook sign in failed",
        description: "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        signIn,
        signUp,
        signOut,
        signInWithGoogle,
        signInWithFacebook,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
