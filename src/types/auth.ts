export type AuthUser = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  token: string;
};
export type AuthContextType = {
  user: AuthUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};
