import { Button } from "@/components/ui/Button";
import { InputIcon } from "@/components/ui/Input";
import { AuthLayout } from "@/layouts/AuthLayout";
import { EnvelopeIcon, KeyIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Signup() {
  return (
    <AuthLayout headTitle="Criar Conta">
      <div className="bg-white mt-8 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <InputIcon
              id="name"
              type="text"
              Icon={UserIcon}
              label="Nome"
            />
          </div>

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

          <div>
            <Button
              type="submit"
              variant="solid"
              color="primary"
              className="w-full"
            >
              Começar
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}