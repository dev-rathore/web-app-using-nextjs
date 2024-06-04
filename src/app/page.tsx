import NextLogo from '@/components/ui/next-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <section className="flex min-h-screen flex-col">
        <div className="flex h-20 shrink-0 items-end bg-primary p-4">
          <NextLogo />
        </div>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
              Welcome to the Web App which is built using <span className='text-primary font-medium'>NextJS</span>.
            </p>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary md:text-base"
            >
              <span>Log in</span>
              <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
            <Image
              src="/assets/hero-desktop.png"
              width={1000}
              height={720}
              alt="Screenshots of the dashboard project showing desktop version"
              className="hidden md:block"
            />
            <Image
              src="/assets/hero-mobile.png"
              width={560}
              height={620}
              alt="Screenshot of the dashboard project showing mobile version"
              className="block md:hidden"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
