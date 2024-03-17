"use server";

import { z } from "zod";

const schema = z.object({
  username: z.string({
    required_error: "Field is required",
  }),

  password: z.string({
    required_error: "password must be 8 digit long",
  }),
});

export const LoginForm = (prevState: any, formData: FormData) => {
  try {
    const validateFields = schema.safeParse({
      username: formData.get("username"),
      password: formData.get("password"),
    });

    console.log(validateFields);

    if (!validateFields.success) {
      return {
        errors: validateFields.error.flatten().fieldErrors,
      };
    }

    return {
      message: "form submitted successfully",
    };
  } catch (error: any) {
    throw new Error("form failed to submit");
  }
};
