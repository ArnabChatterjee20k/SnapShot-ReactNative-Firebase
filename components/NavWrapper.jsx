import BottomNav from "./BottomNav";
import Navbar from "./Navbar";

export default function NavWrapper({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <BottomNav />
    </>
  );
}
