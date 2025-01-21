"use client";

import * as React from "react";
import Link from "next/link";
import { signinSchema } from "@/schemas/signin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "@/components/core/button";
import Checkbox from "@/components/core/checkbox";
import Form from "@/components/core/form";
import Input from "@/components/core/input";

export type SigninFormFields = z.infer<typeof signinSchema>;

export default function SigninForm() {
  const form = useForm<SigninFormFields>({
    resolver: zodResolver(signinSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleFormSubmit = async (_formData: SigninFormFields) => {};

  return (
    <Form.FormRoot {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleFormSubmit)}
        autoComplete="off"
      >
        <Form.FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Email</Form.FormLabel>
              <Form.FormControl>
                <Input
                  type="text"
                  placeholder="Enter your email"
                  autoComplete="off"
                  {...field}
                />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Password</Form.FormLabel>
              <Form.FormControl>
                <Input
                  type="password"
                  placeholder="●●●●●●●●"
                  autoComplete="off"
                  {...field}
                />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <div className="flex items-center justify-between gap-4">
          <Form.FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <Form.FormItem className="flex flex-row-reverse items-center">
                <Form.FormLabel>Remember for 30 days</Form.FormLabel>
                <Form.FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </Form.FormControl>
                <Form.FormMessage />
              </Form.FormItem>
            )}
          />
          <Link href="/auth/forgot-password" className="text-sm">
            Forgot password
          </Link>
        </div>
        <Button type="submit" width="full">
          Sign in
        </Button>
      </form>
    </Form.FormRoot>
  );
}
