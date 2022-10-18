import { InputHTMLAttributes, ReactElement, SVGProps } from "react"

type Props = {
  label: string;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
} & InputHTMLAttributes<HTMLInputElement>

export function InputIcon({ label, Icon, ...props }: Props) {
  return (
    <div>
      <label className="block text-md font-medium text-gray-700">
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        )}

        <input
          type={props.type}
          id={props.id}
          className="block w-full appearance-none rounded-md border-gray-300 pl-10 focus:border-secondary focus:ring-secondary sm:text-md"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  )
}