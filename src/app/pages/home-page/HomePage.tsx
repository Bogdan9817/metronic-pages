import { KTSVG } from "../../../_metronic/helpers";
import { CardsGroup } from "./CardsGroup";

const sources = ["Google", "Twitter", "Reddit"];
const statuses = ["Removed", "Delisted"];

class ContentItem {
  id = Math.round(Math.random() * 100000);
  date = "23 September 2023";
  link = "https://google.com/";
  source = sources[Math.round(Math.random() * 2)];
  status = statuses[Math.round(Math.random())];
}

export function HomePage() {
  const testData = new Array(10).fill(null).map(() => new ContentItem());

  return (
    <div className='d-flex flex-column'>
      <div className='align-self-end mb-10 d-flex align-items-center w-250px'>
        <span className='text-gray-500 fs-14px fw-medium me-8 w-100px '>
          Sort by
        </span>
        <div className='dropdown w-200px'>
          <button
            className=' text-gray-700 form-select form-select-solid fs-5'
            type='button'
            id='dropdownMenuButton1'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Select date
          </button>
          <ul
            className='dropdown-menu p-3'
            aria-labelledby='dropdownMenuButton1'
          >
            <li className='text-gray-700 px-3 py-2 rounded-1 text-hover-primary bg-hover-light-primary fs-5 fw-semibold'>
              Today
            </li>
            <li className='text-gray-700 px-3 py-2  rounded-1 text-hover-primary bg-hover-light-primary fs-5 fw-semibold'>
              Yesterday
            </li>
            <li className='text-gray-700 px-3 py-2 rounded-1 text-hover-primary bg-hover-light-primary fs-5 fw-semibold'>
              This week
            </li>
            <li className='text-gray-700 px-3 py-2 rounded-1 text-hover-primary bg-hover-light-primary fs-5 fw-semibold'>
              This month
            </li>
          </ul>
        </div>
      </div>
      <CardsGroup />
      <div className='d-flex flex-column w-100 h-100 card p-10'>
        <div className='d-flex justify-content-between'>
          <div className='w-200px position-relative'>
            <input className='form-control form-control-solid' />
            <div
              className='d-flex align-items-center position-absolute '
              style={{ bottom: 5, left: 10 }}
            >
              <KTSVG
                path='/media/icons/duotune/communication/com006.svg'
                className='svg-icon-muted svg-icon-2hx'
              />
              <span className='ms-10 fw-semibold text-gray-500'> Search</span>
            </div>
          </div>
          <div className='d-flex align-items-center fs-14px gap-4'>
            <span className='btn btn-light-primary bg-hover-light-primary d-flex align-items-center'>
              <i className='bi bi-box-arrow-up fs-14px'></i>
              <span>Export</span>
            </span>
            <div className='dropdown w-150px'>
              <button
                className=' text-gray-700 form-select form-select-solid fs-5'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Select date
              </button>
              <ul
                className='dropdown-menu p-3'
                aria-labelledby='dropdownMenuButton1'
              >
                <li className='text-gray-700 px-3 py-2 rounded-1 text-hover-primary bg-hover-light-primary fs-5 fw-semibold'>
                  Today
                </li>
                <li className='text-gray-700 px-3 py-2  rounded-1 text-hover-primary bg-hover-light-primary fs-5 fw-semibold'>
                  Yesterday
                </li>
                <li className='text-gray-700 px-3 py-2 rounded-1 text-hover-primary bg-hover-light-primary fs-5 fw-semibold'>
                  This week
                </li>
                <li className='text-gray-700 px-3 py-2 rounded-1 text-hover-primary bg-hover-light-primary fs-5 fw-semibold'>
                  This month
                </li>
              </ul>
            </div>
            <div className='dropdown w-150px'>
              <button
                className=' text-gray-700 form-select form-select-solid fs-5'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Status
              </button>
              <ul
                className='dropdown-menu p-3'
                aria-labelledby='dropdownMenuButton1'
              >
                <li className='text-gray-700 px-3 py-2  rounded-1 text-hover-primary bg-hover-light-primary fs-5 fw-semibold'>
                  Delisted
                </li>
                <li className='text-gray-700 px-3 py-2 rounded-1 text-hover-primary bg-hover-light-primary fs-5 fw-semibold'>
                  Removed
                </li>
              </ul>
            </div>
          </div>
        </div>
        <table className='table table-row-gray-300 gy-7'>
          <thead>
            <tr className='d-flex align-items-center fw-semibold text-gray-500 fs-12px justify-content-between border-bottom border-dashed'>
              <th className='d-flex align-items-center border-0'>
                <span className='bullet bg-gray h-30px w-30px me-5'></span>
                ID
              </th>
              <th className='border-0'>DATE REMOVED</th>
              <th className='border-0'>LINK</th>
              <th className='border-0'>SOURCE</th>
              <th className='border-0'>Action</th>
            </tr>
          </thead>
          <tbody>
            {testData.map((item, index) => (
              <tr
                className='d-flex align-items-center fs-14px fw-semibold justify-content-between border-bottom'
                key={`table-test-index-${index}`}
              >
                <td className='d-flex align-items-center border-0'>
                  <span className='bullet bg-gray h-30px w-30px me-5'></span>
                  <span className='text-gray-700'>{item.id} </span>
                </td>
                <td className='border-0 text-gray-500'>{item.date}</td>
                <td className='border-0 text-align-center text-primary'>
                  <a href={item.link}>{item.link}</a>
                </td>
                <td className='border-0 text-align-center text-gray-500'>
                  {item.source}
                </td>
                <td className='border-0'>
                  <span
                    className={`badge  badge-light-${
                      item.status === "Removed" ? "success" : "danger"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <span className='badge badge-secondary fs-10 fw-semibold text-gray-500 p-4'>
              Total results:529
            </span>
          </div>
          <div>
            <ul className='pagination'>
              <li className='page-item previous disabled'>
                <a href='#' className='page-link'>
                  <i className='previous'></i>
                </a>
              </li>
              {new Array(6).fill("").map((item, index) => (
                <li
                  key={`pagination-item-${index}`}
                  className={`page-item ${index === 0 ? "active" : ""}`}
                >
                  <a href='#' className='page-link'>
                    {index + 1}
                  </a>
                </li>
              ))}
              <li className='page-item next'>
                <a href='#' className='page-link'>
                  <i className='next'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
