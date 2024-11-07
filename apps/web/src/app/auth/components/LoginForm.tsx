'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { type LoginForm, loginValidation } from '@/validation/loginValidation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { api } from '@/trpc/client';
import Link from 'next/link';

function useLogin() {
   const router = useRouter();
   const { toast } = useToast();
   const { mutate: login, isPending } = api.authentication.login.useMutation({
      onSuccess: (data) => {
         if (data.status === 'success') {
            toast({
               description: data.message,
               variant: 'default',
            });
            setTimeout(() => {
               router.push('/user/dashboard');
            }, 1000);
         } else {
            toast({
               description: data.message,
               variant: 'destructive',
            });
         }
      },
      onError: (err) => {
         console.error(err);
         toast({
            description: 'Something went wrong, please try again',
            variant: 'destructive',
         });
      },
   });

   return { login, isPending };
}

export default function LoginForm() {
   const { login, isPending } = useLogin();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<LoginForm>({ resolver: zodResolver(loginValidation) });

   const onSubmit = (data: LoginForm) => {
      login(data);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
         <div className="grid gap-2">
            <Label htmlFor="email">Phone number</Label>
            <Input
               {...register('phoneNumber')}
               id="phoneNumber"
               type="tel"
               placeholder="254727533551"
            />
            <p className="text-xs font-semibold text-destructive">{errors.phoneNumber?.message}</p>
         </div>

         <div className="grid gap-2">
            <div className="flex items-center">
               <Label htmlFor="password">Password</Label>
               <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
               </Link>
            </div>
            <Input {...register('password')} id="password" type="password" />
            <p className="text-xs font-semibold text-destructive">{errors.password?.message}</p>
         </div>

         <Button disabled={isPending} type="submit" className="w-full">
            {isPending ? 'Verifying credentials ...' : 'Login'}
         </Button>
      </form>
   );
}
