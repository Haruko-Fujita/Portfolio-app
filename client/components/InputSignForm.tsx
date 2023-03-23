import ListRow from "@/components/ListRow";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
const qs = require("qs");

interface FormInput {
  email: String;
  password: String;
}

export default function FormAdd() {
  const router = useRouter();

  const { signUp, handleSubmit } = useForm<FormInput>();

  return (
    <>
      <form onSubmit={handleSubmit()}></form>
    </>
  );
}
