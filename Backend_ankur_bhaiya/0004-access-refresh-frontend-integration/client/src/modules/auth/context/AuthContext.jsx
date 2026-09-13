import { createContext, useState, useContext } from "react";

// 1. Create the Context
const AuthContext = createContext(null);

// 2. Create the Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true); // Fixed typo 'ture'

  const value = {
    user,
    accessToken,
    loading,
    isAuthenticated: !!user,
    setUser,
    setAccessToken,
    setLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children} {/* Fixed capitalization */}
    </AuthContext.Provider>
  );
};

// export default AuthContext

// // 3. Create a custom hook for easy consumption
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
