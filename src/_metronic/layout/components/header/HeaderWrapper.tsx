import { toAbsoluteUrl } from "../../../helpers";
import { LayoutSetup, useLayout } from "../../core";

import { Navbar } from "./Navbar";

export function HeaderWrapper() {
  const { config, classes } = useLayout();
  if (config.app?.header?.default?.container === "fluid") {
    LayoutSetup.classes.headerContainer.push("container-fluid");
  } else {
    LayoutSetup.classes.headerContainer.push("container-xxl");
  }
  if (!config.app?.header?.display) {
    return null;
  }

  return (
    <div id='kt_app_header' className='app-header ms-0 px-10 bg-white'>
      <div className='container-fluid d-flex align-items-center px-0'>
        <div className='logo'>
          <a href='#'>
            <img src={toAbsoluteUrl("/media/logos/header.svg")} />
          </a>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
