import React from "react";
import FormWrapper from "@/components/auth/form-wrapper";
import SigninForm from "@/components/auth/signin-form";

export default function Page() {
  return (
    <React.Fragment>
      <FormWrapper>
        <SigninForm />
      </FormWrapper>
    </React.Fragment>
  );
}
