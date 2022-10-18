import { Button } from "@/components/ui/Button";
import { InputIcon } from "@/components/ui/Input";
import { AuthLayout } from "@/layouts/AuthLayout";
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Login() {
  return (
    <AuthLayout headTitle="Login">
      <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">Seja bem vindo(a)</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Não tem uma conta ainda?{' '}
        <Link href="/signup" >
          <a className="font-medium text-blue-600 hover:text-blue-500">
            Crie agora
          </a>
        </Link>
      </p>
      <div className="bg-white mt-8 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <InputIcon
              id="email"
              type="email"
              Icon={EnvelopeIcon}
              label="E-mail"
            />
          </div>

          <div>
            <InputIcon
              id="password"
              type="password"
              label="Senha"
              Icon={KeyIcon}
            />
          </div>

          <div className="flex items-center justify-end">
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Esqueci a senha
              </a>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              variant="solid"
              color="primary"
              className="w-full"
            >
              Entrar
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Ou</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1">
            <div>
              <a
                href="#"
                className="inline-flex w-full gap-2 justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              >
                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill-rule="evenodd" fill-opacity="1" fill="#4285f4" stroke="none"></path><path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z" fill-rule="evenodd" fill-opacity="1" fill="#34a853" stroke="none"></path><path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill-rule="evenodd" fill-opacity="1" fill="#fbbc05" stroke="none"></path><path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill-rule="evenodd" fill-opacity="1" fill="#ea4335" stroke="none"></path>
                </svg>
                <span className="text-md font-medium text-gray-700">Continue com Google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}