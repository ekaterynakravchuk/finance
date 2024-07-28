import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <SignUp path='/sign-up'/>
    </div>
  );
};

export default SignUpPage;
