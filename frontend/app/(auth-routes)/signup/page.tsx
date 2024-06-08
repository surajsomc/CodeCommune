"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { GoogleIcon, GithubIcon } from "@/assets/icons";
import Link from "next/link";

// -------------
const formSchema = z.object({
  username: z.string().min(1, {
    message: "username is required",
  }),

  email: z.string().min(1, 'Email is required').email('Invalid email'),

  password: z.string().min(1, 'password is required').min(8, 'password must have more than 7 characters'),

  confirmPassword: z.string().min(1, "Password confirmation is required"),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

const Signup = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: { username: string; email: string; password: string; confirmPassword: string }) {
    console.log(data);
  }

  return (
    <div
      className={`min-h-screen bg-violet-50  from-violet-200 via-white to-white flex justify-center items-center p-5 bg-[url('/bg.svg')] bg-no-repeat bg-cover`}
    >
      <div className="max-w-[400px] w-[400px] p-4 shadow-smd border border-border bg-white rounded-sm">
        <h1 className="text-center text-2xl mb-10 font-medium">Signup</h1>
        <div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-[4px]"
                        placeholder="shadcn"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-[4px]"
                        placeholder="shadcn"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="rounded-[4px]"
                        placeholder="shadcn"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="rounded-[4px]"
                        placeholder="shadcn"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              <Button
                type="submit"
                className="w-full mt-4 rounded-[4px] font-semibold">
                Signup
              </Button>

            </form>
          </Form>

          <p className="text-center text-sm text-grey-600 mt-2">already have an account? <Link href={"/login"} className="text-blue-500 hover:underline">login</Link> </p>

          <p className="text-center mt-4">or</p>
          <div>
            <Button className="hover:bg-white hover:scale-[1.02] transition-transform duration-400 w-full mt-5 bg-white border border-border text-black rounded-[4px] items-center gap-x-4">
              <GoogleIcon className="h-full w-max" />
              Login with google
            </Button>
            <Button className="hover:bg-white hover:scale-[1.02] transition-transform duration-400 w-full mt-5 bg-white border border-border text-black rounded-[4px] items-center gap-x-4">
              <GithubIcon className="h-full w-max" />
              Login with github
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;