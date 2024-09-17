import { useState } from "react";
import PropTypes from "prop-types";

const SettingsPanel = ({ settings, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = (key) => {
    onChange(key, !settings[key]);
  };

  return (
    <>
      <div className='relative bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <a href='#'>
                <span className='sr-only'>Workflow</span>
                <h1 className='text-3xl font-bold'>Dashboard</h1>
              </a>
            </div>

            <div className='-mr-2 -my-2 md:hidden'>
              <button
                type='button'
                className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                onClick={() => setOpen(!open)}
              >
                <span className='sr-only'>Open menu</span>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>

            <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
              {Object.entries(settings).map(([key, value]) => (
                <label
                  key={key}
                  className='inline-flex items-center me-5 cursor-pointer'
                >
                  <input
                    type='checkbox'
                    checked={value}
                    onChange={() => handleToggle(key)}
                    className='sr-only peer'
                  />
                  <div
                    className={`relative w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-sky-300 ${
                      value
                        ? "peer-checked:bg-sky-600"
                        : "peer-checked:bg-gray-600"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 left-0.5 bg-white border-gray-300 border rounded-full h-5 w-5 transition-transform ${
                        value ? "translate-x-5" : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                  <span className='ms-3 text-sm font-medium text-gray-900'>
                    {key}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <div></div>
                <div className='-mr-2'>
                  <button
                    type='button'
                    className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                    onClick={() => setOpen(!open)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className='py-6 px-5 space-y-6'>
              <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                {Object.entries(settings).map(([key, value]) => (
                  <a
                    key={key}
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    <label className='inline-flex items-center cursor-pointer'>
                      <input
                        type='checkbox'
                        checked={value}
                        onChange={() => handleToggle(key)}
                        className='sr-only peer'
                      />
                      <div
                        className={`relative w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-sky-300 ${
                          value
                            ? "peer-checked:bg-sky-600"
                            : "peer-checked:bg-gray-600"
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 left-0.5 bg-white border-gray-300 border rounded-full h-5 w-5 transition-transform ${
                            value ? "translate-x-5" : "translate-x-0"
                          }`}
                        ></div>
                      </div>
                      <span className='ms-3 text-sm font-medium text-gray-900'>
                        {key}
                      </span>
                    </label>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SettingsPanel.propTypes = {
  settings: PropTypes.objectOf(PropTypes.bool).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SettingsPanel;

