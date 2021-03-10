import React from "react";
import { ICONS, IMAGES } from "../../constants";
import { appStoreContext } from 'RootStore';

const Headers: React.FunctionComponent = () => {
  const appStore = React.useContext(appStoreContext);
  const [openMenuMobile, setOpenMenuMobile] = React.useState(false);
  const toggleOpenHandler = () => setOpenMenuMobile(!openMenuMobile);

  return (
    <div className="relative shadow-lg">
      <div className="max-w-full px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Logo</span>
              <img className="h-8 w-auto sm:h-8 object-contain" src={appStore.appLanguage === 'th' ? IMAGES.logoAppTh : IMAGES.logoAppEn} alt="Logo" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={toggleOpenHandler}
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open Menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">รู้จักมั่งมี</a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">ฟีเจอร์เด่น</a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">คำถามที่พบบ่อย</a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">ลงทะเบียน</a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">ติดต่อเรา / โทร: 02 725 4984</a>
          </nav>
        </div>
      </div>

      { // toggle menu on mobile only
        openMenuMobile && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right duration-1000 ease-in-out sm:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src={ICONS.logoMungmeeThai} alt="Workflow" />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleOpenHandler}
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-600 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">รู้จักมั่งมี</span>
                    </a>
                    <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-600 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">ฟีเจอร์เด่น</span>
                    </a>
                    <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-600 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">คำถามที่พบบ่อย</span>
                    </a>
                    <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-600 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">ลงทะเบียน</span>
                    </a>
                    <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-600 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">ติดต่อเรา / โทร: 02 725 4984</span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Headers;