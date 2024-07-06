import { Label } from './ui/label';
import { Input } from './ui/input';
import { UseFormRegisterReturn } from 'react-hook-form';

type FormInputProps = {
   id: string;
   label: string;
   type?: string;
   register?: UseFormRegisterReturn;
   error?: string;
   inputClassName?: string;
};
export default function FormInput({
   id,
   label,
   type,
   register,
   error,
   inputClassName,
}: FormInputProps) {
   return (
      <div className="flex flex-col gap-2">
         <Label htmlFor={id}>{label}</Label>
         <Input {...register} className={inputClassName} id={id} type={type} />
         <p className="text-xs font-thin text-destructive">{error}</p>
      </div>
   );
}
