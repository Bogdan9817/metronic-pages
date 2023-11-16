import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { KTSVG, toAbsoluteUrl } from "../../../../_metronic/helpers";
import { PasswordMeterComponent } from "../../../../_metronic/assets/ts/components";
import { useAuth } from "../core/Auth";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  creatorname: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};

const registrationSchema = Yup.object();

export function Registration() {
  const [toggleConfirm, setToggleConfirm] = useState(true);
  const [togglePassword, setTogglePassword] = useState(true);
  const { setCurrentUser } = useAuth();
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async () => {
      const testUser = {
        username: "test",
        id: 0,
        password: "test",
        email: "test@gmail.com",
        first_name: "Bob",
        last_name: "Sinclar",
      };

      setCurrentUser(testUser);
    },
  });

  useEffect(() => {
    PasswordMeterComponent.bootstrap();
  }, []);

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_signup_form'
      onSubmit={formik.handleSubmit}
    >
      {/* begin::Heading */}
      <div className='text-center mb-11'>
        {/* begin::Title */}
        <h1 className='text-gray-900 fw-bolder mb-3 mt-7'>Account Details</h1>
        {/* end::Title */}

        <div className='text-gray-500 fw-semibold fs-6'>
          Add your personal info
        </div>
      </div>
      {/* end::Heading */}

      {/* begin::Login options */}
      <div className='row g-3 mb-9'>
        {/* begin::Col */}
        <div className='col-md-6'>
          {/* begin::Google link */}
          <a
            href='#'
            className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
          >
            <img
              alt='Logo'
              src={toAbsoluteUrl("/media/svg/brand-logos/google-icon.svg")}
              className='h-15px me-3'
            />
            Sign in with Google
          </a>
          {/* end::Google link */}
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-md-6'>
          {/* begin::Google link */}
          <a
            href='#'
            className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
          >
            <img
              alt='Logo'
              src={toAbsoluteUrl("/media/svg/brand-logos/apple-black.svg")}
              className='theme-light-show h-15px me-3'
            />
            <img
              alt='Logo'
              src={toAbsoluteUrl("/media/svg/brand-logos/apple-black-dark.svg")}
              className='theme-dark-show h-15px me-3'
            />
            Sign in with Apple
          </a>
          {/* end::Google link */}
        </div>
        {/* end::Col */}
      </div>
      {/* end::Login options */}

      <div className='separator separator-content my-14'>
        <span className='w-125px text-gray-500 fw-semibold fs-7'>
          Or with email
        </span>
      </div>

      {formik.status && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      )}

      {/* begin::Form group Firstname + Lastname */}
      <div className='d-flex justify-content-between'>
        <div className='fv-row mb-8'>
          <input
            placeholder='First name'
            type='text'
            autoComplete='off'
            {...formik.getFieldProps("firstname")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid":
                  formik.touched.firstname && formik.errors.firstname,
              },
              {
                "is-valid":
                  formik.touched.firstname && !formik.errors.firstname,
              }
            )}
          />
          {formik.touched.firstname && formik.errors.firstname && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.firstname}</span>
              </div>
            </div>
          )}
        </div>
        {/* end::Form group */}
        <div className='fv-row mb-8'>
          {/* begin::Form group Lastname */}
          <input
            placeholder='Last name'
            type='text'
            autoComplete='off'
            {...formik.getFieldProps("lastname")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid": formik.touched.lastname && formik.errors.lastname,
              },
              {
                "is-valid": formik.touched.lastname && !formik.errors.lastname,
              }
            )}
          />
          {formik.touched.lastname && formik.errors.lastname && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.lastname}</span>
              </div>
            </div>
          )}
          {/* end::Form group */}
        </div>
      </div>

      {/* begin:: Form group Creator */}
      <div className='fv-row mb-8'>
        <input
          placeholder='Creator Name'
          type='text'
          autoComplete='off'
          className='form-control bg-transparent'
        />
        {formik.touched.creatorname && formik.errors.creatorname && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.creatorname}</span>
            </div>
          </div>
        )}
      </div>

      {/* begin::Form group Email */}
      <div className='fv-row mb-8'>
        <input
          placeholder='Email'
          type='email'
          autoComplete='off'
          {...formik.getFieldProps("email")}
          className={clsx(
            "form-control bg-transparent",
            { "is-invalid": formik.touched.email && formik.errors.email },
            {
              "is-valid": formik.touched.email && !formik.errors.email,
            }
          )}
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.email}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group Password */}
      <div className='fv-row mb-8' data-kt-password-meter='true'>
        <div className='mb-1'>
          <div className='position-relative mb-3'>
            <input
              type={togglePassword ? "password" : "text"}
              placeholder='Password'
              autoComplete='off'
              {...formik.getFieldProps("password")}
              className='form-control bg-transparent'
            />
            <span
              onClick={() => setTogglePassword(!togglePassword)}
              className='position-absolute'
              style={{ top: 10, right: 10 }}
            >
              {togglePassword ? (
                <i className='bi bi-eye-slash-fill fs-2x text-muted'></i>
              ) : (
                <i className='bi bi-eye-fill fs-2x text-muted'></i>
              )}
            </span>
            {formik.touched.password && formik.errors.password && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.password}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group Confirm password */}
      <div className='fv-row position-relative mb-5'>
        <input
          type={toggleConfirm ? "password" : "text"}
          placeholder='Password confirmation'
          autoComplete='off'
          {...formik.getFieldProps("changepassword")}
          className='form-control bg-transparent'
        />
        <span
          onClick={() => setToggleConfirm(!toggleConfirm)}
          className='position-absolute'
          style={{ top: 10, right: 10 }}
        >
          {toggleConfirm ? (
            <i className='bi bi-eye-slash-fill fs-2x text-muted'></i>
          ) : (
            <i className='bi bi-eye-fill fs-2x text-muted'></i>
          )}
        </span>
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
        <label
          className='form-check form-check-inline'
          htmlFor='kt_login_toc_agree'
        >
          <input
            className='form-check-input'
            type='checkbox'
            id='kt_login_toc_agree'
            {...formik.getFieldProps("acceptTerms")}
          />
          <span>
            I Accept the{" "}
            <a
              href='#'
              target='_blank'
              className='ms-1 link-primary fw-semibold'
            >
              Terms
            </a>
            .
          </span>
        </label>
        {formik.touched.acceptTerms && formik.errors.acceptTerms && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.acceptTerms}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_up_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
        >
          <span className='indicator-label'>Continue</span>
        </button>

        <div className='text-gray-500 fw-semibold fs-6'>
          Already have an Account?{" "}
          <a href='#' className='ms-1 fw-semibold link-primary'>
            Sign in
          </a>
        </div>
      </div>
      {/* end::Form group */}
    </form>
  );
}
