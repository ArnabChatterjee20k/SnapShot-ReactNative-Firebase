import RouteProvider from "./navigations";
import AuthContextProvider from "./context/AuthContext";
export default function App() {
  return (
    <AuthContextProvider>
      <RouteProvider />
    </AuthContextProvider>
  );
}
