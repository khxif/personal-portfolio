import { ContactForm } from '@/components/forms/contact-form';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Contact',
};

const roboto_mono = Roboto_Mono({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Contact() {
  return (
    <main
      className={cn(
        'flex px-6 md:px-10 flex-col md:flex-row items-center gap-x-8 w-full h-full md:mb-20',
        roboto_mono.className,
      )}
    >
      <div className="md:w-1/2">
        <h1 className="flex half-underline items-center font-light space-x-4 text-4xl py-4">
          <span className="">Get in</span>
          <span className="font-bold text-main">Touch!</span>
        </h1>

        <p className="py-8 leading-8">
          Are you looking for a fast-performing and user-friendly website to represent your product
          or business? or looking for any kind of consultation? or want to ask questions? or have
          some advice for me or just want to say &ldquo;Hi 👋&ldquo; in any case feel free to Let me
          know. I will do my best to respond back. 😊 The quickest way to reach out to me is via an
          email.
        </p>
      </div>

      <div className={cn('py-5 px-2 md:px-5 w-full md:w-1/2', roboto_mono.className)}>
        <ContactForm />
      </div>
    </main>
  );
}
