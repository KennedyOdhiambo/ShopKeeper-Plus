import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { UseFormRegisterReturn } from "react-hook-form"

type FormInputProps = {
   id: string
   label: string
   type?: string
   register?: UseFormRegisterReturn
   error?: string
}
export default function FormInput({ id, label, type, register, error }: FormInputProps) {
   return (
      <div className="flex flex-col gap-2">
         <Label htmlFor={id}>{label}</Label>
         <Input {...register} className="w-96 lg:w-80 xl:w-72 2xl:w-80" id={id} type={type} />
         <p className="text-xs text-destructive  font-thin">{error}</p>
      </div>
   )
}
