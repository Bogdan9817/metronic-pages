import { useLocation } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../helpers";

const SidebarMenu = () => {
  const location = useLocation();
  const navLinks = [
    {
      label: "Home",
      iconPath: "home.svg",
      path: "/home-page",
    },
    {
      label: "Submit violations",
      iconPath: "submit.svg",
      path: "",
    },
    {
      label: "Whitelist",
      iconPath: "public.svg",
      path: "",
    },
    {
      label: "Billing",
      iconPath: "billing.svg",
      path: "",
    },
    {
      label: "Affiliate Program",
      iconPath: "program.svg",
      path: "",
    },
    {
      label: "Settings",
      iconPath: "settings.svg",
      path: "",
    },
    {
      label: "FAQ",
      iconPath: "faq.svg",
      path: "",
    },
    {
      label: "Support",
      iconPath: "support.svg",
      path: "",
    },
  ];

  return (
    <div className='app-sidebar-menu overflow-hidden flex-column-fluid '>
      <nav className='d-flex flex-column justify-content-center align-items-start px-10 pt-10 gap-5 w-100'>
        {navLinks.map((item, index) => (
          <div className='w-100' key={`sidebar-nav-item-${index}`}>
            <a
              href={item.path}
              className={`d-flex flex-row fs-16px px-2 py-1 ${
                location.pathname === item.path
                  ? "bg-light-primary color-primary"
                  : "text-gray-700"
              } rounded-3`}
            >
              <img
                className='me-2 svg-icon-gray'
                src={toAbsoluteUrl(`/media/navigation/${item.iconPath}`)}
              />
              <span>{item.label}</span>
            </a>
          </div>
        ))}
      </nav>
    </div>
  );
};

export { SidebarMenu };
