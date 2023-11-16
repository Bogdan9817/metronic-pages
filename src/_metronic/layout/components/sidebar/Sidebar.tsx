/* eslint-disable no-prototype-builtins */
import { SidebarMenu } from "./sidebar-menu/SidebarMenu";

const Sidebar = () => {
  return (
    <>
      <div id='kt_app_sidebar' className='app-sidebar bg-white'>
        <SidebarMenu />
      </div>
    </>
  );
};

export { Sidebar };
