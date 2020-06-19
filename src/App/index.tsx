import React, { FunctionComponent } from 'react';


export const App: FunctionComponent = () => {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>

        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>

        <div className="text-center">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            BNP Paribas Fortis complaint form
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            We all love to have some{' '}
            <a
              href="https://cake.app"
              className="font-medium text-gray-700 underline"
            >
              Cake 🍰
            </a>
            .
            <br />
            Unfortunately{' '}
            <a
              href="https://twitter.com/CakeDotApp/status/1273651173636149255"
              className="font-medium text-gray-700 underline"
            >
              BNP Paribas Fortis doesn't
            </a>
            . 😢
          </p>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Let's make BNP Paribas Fortis{' '}
            <a
              href="https://ec.europa.eu/info/law/payment-services-psd-2-directive-eu-2015-2366_en"
              className="font-medium text-gray-700 underline"
            >
              PSD 2
            </a>{' '}
            compliant, so we all can have some Cake! 💪
          </p>

          <p className="mt-4 text-lg leading-6 text-gray-500">
            Fill in your details and send the generated template to{' '}
            <a
              href="mailto:complaints.management@bnpparisbasfortis.com"
              className="font-medium text-gray-700 underline"
            >
              complaints.management@bnpparisbasfortis.com
            </a>
            .
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              First name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="first_name"
                className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Last name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="last_name"
                className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Client ID (available on your bank card)
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="client_id"
                className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <span className="w-full inline-flex rounded-md shadow-sm">
              <button
                type="button"
                disabled
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                ⚙️ Generate template
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
