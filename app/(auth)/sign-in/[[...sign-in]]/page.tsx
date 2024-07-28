import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';

const SignInPage = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <ClerkLoaded>
      <SignIn path='/sign-in' />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className='animate-spin' />
      </ClerkLoading>
    </div>
  );
};

export default SignInPage;
