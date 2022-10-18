import { ReactNode, useState } from 'react'

import { Sidebar } from '@/components/ui/Sidebar'
import {
  Bars3Icon
} from '@heroicons/react/24/outline'
import { PageHead } from '@/components/ui/PageHead';

type Props = {
  pageTitle: string;
  children: ReactNode;
  headTitle: string;
  description?: string;
  keywords?: string;
}

export function AppLayout({ pageTitle, children, headTitle, description, keywords }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <PageHead title={headTitle} description={description} keywords={keywords} />
      <div>
        <Sidebar
          openSidebar={sidebarOpen}
          handleCloseSidebar={() => setSidebarOpen(false)}
          currentMenu='Dashboard'
        />

        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">{pageTitle}</h1>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
