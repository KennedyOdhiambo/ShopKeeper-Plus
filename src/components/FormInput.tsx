import { Label } from "./ui/label"
import { Input } from "./ui/input"

type FormInputProps = {
   id: string
   label: string
   type?: string
}
export default function FormInput({ id, label, type }: FormInputProps) {
   return (
      <div className="flex flex-col gap-2">
         <Label htmlFor={id}>{label}</Label>
         <Input className="w-[380px] 2xl:w-[320px]" id={id} type={type} />
      </div>
   )
}
