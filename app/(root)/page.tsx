import AddDocumentBtn from '@/components/AddDocumentBtn';
import Header from '@/components/Header';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Image from 'next/image';

const Home = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect('/sign-in');

  const documents = [];

  return (
    <div>
      <main className='home-container'>
        <Header className='sticky, left-8 top-0'>
          <div className='flex items-center gap-2 lg:gap-4'>
            Notification
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </Header>
        {documents.length > 0 ? (
          <div></div>
        ) : (
          <div className='document-list-empty'>
            <Image
              src='/assets/icons/doc.svg'
              alt='Document'
              width={40}
              height={40}
              className='mx-auto'
            />

            <AddDocumentBtn
              userId={clerkUser.id}
              email={clerkUser.emailAddresses[0].emailAddress}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;

// https://www.youtube.com/watch?v=y5vE8y_f_OM&ab_channel=JavaScriptMastery

// 1:37
