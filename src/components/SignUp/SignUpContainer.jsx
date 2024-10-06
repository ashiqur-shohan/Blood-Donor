import { H1 } from "../../UI/H1";
import SignUpForm from "./SignUpForm";

const SignUpContainer = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="section text-center">
        <H1>Sign Up</H1>
        <SignUpForm />
      </div>
    </section>
  );
};

export default SignUpContainer;
