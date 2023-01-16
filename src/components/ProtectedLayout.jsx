import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { MyAppBar } from "./MyAppBar";

export const ProtectedLayout = () => {
  const { userinfo } = useAuth();
  const outlet = useOutlet();

  console.log("protectedlayout")
  console.log(userinfo)
  if (!userinfo) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <MyAppBar
        pages={[
          { label: "Settings", path: "settings" },
          { label: "Profile", path: "profile" }
        ]}
      />
      {outlet}
    </div>
  );
};
