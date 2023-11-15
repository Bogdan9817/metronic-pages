import { useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_metronic/helpers";

const AuthLayout = () => {
  const location = useLocation();

  const steps = [
    {
      title: "Account Type",
      text: "Select your account type",
      pathname: "/auth/",
    },
    {
      title: "Personal Info",
      text: "Setup your personal info",
      pathname: "/auth/registration",
    },
    {
      title: "Verification",
      text: "Verify your account",
      pathname: "",
    },
    {
      title: "Creator Info",
      text: "Setup creator details",
      pathname: "",
    },
    {
      title: "Completed",
      text: "Your account is created",
      pathname: "",
    },
  ];

  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.style.height = "100%";
    }
    return () => {
      if (root) {
        root.style.height = "auto";
      }
    };
  }, []);

  return (
    <div
      className={`d-flex flex-column ${
        location.pathname === "/auth/" ? "flex-lg-row-reverse" : "flex-lg-row"
      } flex-column-fluid stepper stepper-pills stepper-column stepper-multistep`}
    >
      {/* begin::Body */}
      <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1'>
        {/* begin::Form */}
        <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
          {/* begin::Wrapper */}
          {location.pathname === "/auth/" ? (
            <div className='w-lg-650px w-xl-700px p-10 p-lg-15 mx-auto'>
              <Outlet />
            </div>
          ) : (
            <div className='w-lg-500px p-10'>
              <Outlet />
            </div>
          )}

          {/* end::Wrapper */}
        </div>
        {/* end::Form */}
      </div>
      {/* end::Body */}

      {/* begin::Aside */}
      <div className='d-flex flex-column flex-lg-row-auto w-lg-350px w-xl-500px'>
        {/* begin::Content */}
        <div
          className='d-flex flex-column position-lg-fixed top-0 bottom-0 w-lg-350px w-xl-500px scroll-y bgi-size-cover bgi-position-center'
          style={{
            backgroundImage: `url(${toAbsoluteUrl("/media/misc/auth-bg.png")})`,
          }}
        >
          {/* begin::Logo */}
          <div className='d-flex flex-column flex-center py-15 px-5 px-md-15 w-100'>
            <Link to='/' className='mb-12'>
              <img
                alt='Logo'
                src={toAbsoluteUrl("/media/logos/custom-1.png")}
                className='h-70px'
              />
            </Link>
          </div>

          {/* end::Logo */}
          {/* begin::Aside content */}
          <div className='d-flex flex-row-fluid justify-content-center p-10'>
            {/* begin::Steps */}
            <div className='stepper-nav d-flex flex-column'>
              {steps.map((step, index) => (
                <div
                  key={`step-${index}`}
                  className={`stepper-item ${
                    location.pathname === step.pathname ? "current" : ""
                  }`}
                >
                  <div className='stepper-wrapper'>
                    <div className='stepper-icon rounded-3'>
                      <span className='stepper-number'>{index + 1}</span>
                    </div>
                    <div className='stepper-label'>
                      <h3 className='stepper-title fs-2'>{step.title}</h3>
                      <div className='stepper-desc fw-normal'>{step.text}</div>
                    </div>
                  </div>
                  {steps.length - 1 > index && (
                    <div className='stepper-line h-40px'></div>
                  )}
                </div>
              ))}
            </div>

            {/* end::Steps */}
          </div>

          {/* end::Aside-content */}

          {/* begin::Footer */}
          <div className='d-flex flex-center flex-wrap px-5 py-10'>
            {/* begin::Links */}
            <div className='d-flex fw-normal'>
              <a href='#' className='text-success px-5' target='_blank'>
                Terms
              </a>

              <a href='#' className='text-success px-5' target='_blank'>
                Plans
              </a>

              <a href='#' className='text-success px-5' target='_blank'>
                Contact Us
              </a>
            </div>
            {/* end::Links */}
          </div>
          {/* end::Footer */}
        </div>
        {/* end::Content */}
      </div>
      {/* end::Aside */}
    </div>
  );
};

export { AuthLayout };
