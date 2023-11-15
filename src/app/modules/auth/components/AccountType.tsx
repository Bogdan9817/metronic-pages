import { useNavigate } from "react-router-dom";
import { KTSVG } from "../../../../_metronic/helpers";
import { useState } from "react";

type AccType = "Creator" | "Agency";

export function AccountType() {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState<AccType>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (accountType) {
      return navigate("/auth/personal-info");
    }
  };

  const options = [
    {
      type: "Creator",
      desc: "Sign-up as a creator",
      iconpath: "/media/icons/duotune/communication/com006.svg",
    },
    {
      type: "Agency",
      desc: "Sign-up as an agency",
      iconpath: "/media/icons/duotune/finance/fin006.svg",
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className='my-auto pb-5 fv-plugins-bootstrap5 fv-plugins-framework'
    >
      <div>
        <div className='w-100'>
          <div className='pb-10 pb-lg-15'>
            <h2 className='fw-bold d-flex align-items-center text-gray-900'>
              Choose account type
            </h2>
            <div className='text-muted fw-semibold fs-6'>
              If you need more info, please check out{" "}
              <a href='#' className='link-primary fw-bold'>
                Help Page
              </a>
              .
            </div>
          </div>
          <div className='fv-row fv-plugins-icon-container'>
            <div className='row'>
              {options.map((acc, index) => (
                <div className='col-lg-6'>
                  <input
                    className='btn-check'
                    type='radio'
                    name='account_type'
                    id={acc.type}
                    onChange={() => setAccountType(acc.type as AccType)}
                  />
                  <label
                    htmlFor={acc.type}
                    className='btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-10'
                  >
                    <KTSVG
                      path={acc.iconpath}
                      className='svg-icon-muted me-5 svg-icon-2hx'
                    />
                    <div className='fw-semibold text-start'>
                      <div className='text-gray-900 fw-bold  fs-4 mb-2'>
                        {acc.type}
                      </div>
                      <div className='text-muted fw-semibold fs-6'>
                        {acc.desc}
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className='d-flex pt-15 justify-content-end'>
            <button
              disabled={!!!accountType}
              className='btn btn-lg btn-primary'
            >
              Continue
              <KTSVG
                path='/media/icons/duotune/arrows/arr001.svg'
                className='svg-icon h-24px ms-1'
              />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
