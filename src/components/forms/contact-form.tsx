'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const formSchema = z.object({
  user_name: z.string().min(2, {
    message: 'Minmum 2 characters should be entered',
  }),
  user_email: z.string().min(5, {
    message: 'Enter a valid email!',
  }),
  message: z.string().min(2, {
    message: 'Enter a valid message.',
  }),
});

export function ContactForm() {
  const formRef = useRef<any>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: '',
      user_email: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_KEY!,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!,
      )
      .then(
        result => {
          console.log(result.text);
          toast.success('Message sent');
        },
        error => {
          console.log(error.text);
          toast.error('Mail not sent.Try again!');
        },
      );
  };
  return (
    <div className="flex items-center justify-center md:mt-4 py-8 w-full">
      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full md:px-24 flex flex-col"
        >
          <FormField
            control={form.control}
            name="user_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    className="w-full border-zinc-400 focus-within:border-main py-2 bg-transparent"
                    placeholder="John Doe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="user_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="w-full  border-zinc-400 focus-within:border-main"
                    type="email"
                    placeholder="john@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    className="w-full  border-zinc-400 focus-within:border-main"
                    placeholder="Type your message here."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            type="submit"
            className="bg-main w-full py-2 rounded-md hover:bg-transparent border
            transition-all duration-200 ease-in-out hover:border-main border-transparent"
          >
            Submit
          </button>
        </form>
      </Form>
    </div>
  );
}
