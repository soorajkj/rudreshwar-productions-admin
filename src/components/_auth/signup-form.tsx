"use client";

import * as React from "react";
import { signupSchema } from "@/schemas/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "@/components/core/button";
import Form from "@/components/core/form";
import Input from "@/components/core/input";

export type SignupFormFields = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const form = useForm<SignupFormFields>({
    resolver: zodResolver(signupSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const handleFormSubmit = async (_formData: SignupFormFields) => {};

  return (
    <Form.FormRoot {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleFormSubmit)}
        autoComplete="off"
      >
        <Form.FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Full Name</Form.FormLabel>
              <Form.FormControl>
                <Input
                  type="text"
                  placeholder="Enter your name"
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
          name="email"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Email</Form.FormLabel>
              <Form.FormControl>
                <Input
                  type="email"
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
                  type={"password"}
                  placeholder="Create a password"
                  autoComplete="off"
                  className="pr-11"
                  {...field}
                />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Button type="submit" width="full">
          Get started
        </Button>
      </form>
    </Form.FormRoot>
  );
}
