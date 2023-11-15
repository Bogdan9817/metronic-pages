import { Route, Routes } from "react-router-dom";
import { Registration } from "./components/Registration";
import { AccountType } from "./components/AccountType";
import { AuthLayout } from "./AuthLayout";
import { Redirect } from "./components/Redirect";

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route index element={<AccountType />} />
      <Route path='personal-info' element={<Registration />} />
      <Route path='*' element={<Redirect />} />
    </Route>
  </Routes>
);

export { AuthPage };
