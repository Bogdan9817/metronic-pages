import { Route, Routes, Navigate } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import { HomePage } from "../pages/home-page/HomePage";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/home-page' />} />
        {/* Pages */}
        <Route path='/home-page' element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export { PrivateRoutes };
