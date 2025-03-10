'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronDown } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className='flex min-h-[calc(100vh-6rem)] flex-col bg-stone-50 lg:flex-row'>
      {/* Left half */}
      <div className='flex w-full flex-col p-6 lg:w-1/2 lg:p-12 xl:p-16'>
        {/* Contact Information */}
        <h1 className='mb-5 text-4xl font-bold lg:text-5xl xl:text-6xl'>
          Contact Us
        </h1>
        <p className='mb-5 w-full text-gray-600 lg:w-3/4'>
          Building people,not just cars.
        </p>
        <p className='mb-2 text-gray-600'>prcorporate.camberracing@gmail.com</p>
        <p className='mb-5 text-gray-600'>+91 988491482</p>
        <a
          href='mailto:prcorporate.camberracing@gmail.com'
          className='mb-10 font-semibold underline'
        >
          Customer Support
        </a>

        <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
          <div>
            <h3 className='mb-2 font-semibold'>Customer Support</h3>
            <p className='text-sm text-gray-600'>
              Our support team is available around the clock to address any
              concerns or queries you may have.
            </p>
          </div>
          <div>
            <h3 className='mb-2 font-semibold'>Feedback and Suggestions</h3>
            <p className='text-sm text-gray-600'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              molestias sunt ad nostrum minima. Pariatur.
            </p>
          </div>
          <div>
            <h3 className='mb-2 font-semibold'>Media Inquiries</h3>
            <p className='text-sm text-gray-600'>
              For media-related questions or press inquiries, please contact us
              at camberMedia@gmail.com.
            </p>
          </div>
        </div>
      </div>

      {/* Right half (adjusted) */}
      <div className='flex w-full items-start justify-center p-4 pt-8 lg:w-1/2 lg:p-5 lg:pt-11'>
        <div className='w-full max-w-md rounded-xl bg-white p-6 shadow-2xl'>
          <h2 className='mb-4 text-2xl font-bold'>Get in Touch</h2>
          <p className='mb-6 text-gray-600'>You can reach us anytime</p>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <Input
                type='text'
                name='firstName'
                placeholder='First name'
                className='flex-1'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Input
                type='text'
                name='lastName'
                placeholder='Last name'
                className='flex-1'
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <Input
              type='email'
              name='email'
              placeholder='Your email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className='flex'>
              <div className='relative inline-block'>
                <select
                  className='appearance-none rounded-l-md border border-r-0 border-gray-300 bg-white px-3 py-2 pr-8 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
                  required
                >
                  <option>+91</option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <ChevronDown className='h-4 w-4' />
                </div>
              </div>
              <Input
                type='tel'
                name='phone'
                placeholder='Phone number'
                className='flex-1 rounded-l-none'
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <Textarea
              name='message'
              placeholder='How can we help?'
              className='min-h-[100px]'
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className='text-right'>
              <span className='text-sm text-gray-500'>0/120</span>
            </div>
            <Button
              type='submit'
              className='w-full rounded-2xl bg-blue-600 hover:bg-blue-700'
            >
              Submit
            </Button>
          </form>
          <p className='mt-4 text-center text-sm text-gray-500'>
            {status && <span>{status}</span>}
          </p>
          <p className='mt-4 text-center text-sm text-gray-500'>
            By contacting us, you agree to our{' '}
            <a href='#' className='text-blue-600 hover:underline'>
              Terms of service
            </a>{' '}
            and{' '}
            <a href='#' className='text-blue-600 hover:underline'>
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
