import { Logo } from "@/components/ui/Logo";
import { PageHead } from "@/components/ui/PageHead";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  headTitle: string;
  description?: string;
  keywords?: string;
}

export function AuthLayout({ children, headTitle, description, keywords }: Props) {
  return (
    <>
      <PageHead title={headTitle} description={description} keywords={keywords} />
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo className='h-14 w-auto mx-auto' />
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          {children}
        </div>
      </div>
    </>
  )
}