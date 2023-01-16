import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { MyAppBar } from "./MyAppBar";

export const HomeLayout = () => {
  const { userinfo } = useAuth();
  const aaaa = useAuth();
  const outlet = useOutlet();

  console.log("homelayout")
  console.log(userinfo)
  console.log(aaaa)
  if (userinfo) {
    return <Navigate to="/dashboard/profile" replace />;
  }

  return (
    <div>
      <MyAppBar
        pages={[
          { label: "Home", path: "/" },
          { label: "Login", path: "/login" }
        ]}
      />
      {outlet}
    </div>
  );
};
