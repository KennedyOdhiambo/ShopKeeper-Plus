import { Label } from "./ui/label"
import { Input } from "./ui/input"

type FormInputProps = {
   id: string
   label: string
   type?: string
}
export default function FormInput({ id, label, type }: FormInputProps) {
   return (
      <div className="flex flex-col space-y-1.5">
         <Label htmlFor={id}>{label}</Label>
         <Input id={id} type={type} />
      </div>
   )
}
