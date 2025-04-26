export const saveToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };
  
  export const getToken = (): string | null => {
    return localStorage.getItem("authToken");
  };
  
  export const isAuthenticated = (): boolean => {
    return !!getToken();
  };
  
  export const logout = (): void => {
    localStorage.removeItem("authToken");
  };
  

