"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);

    if (response.status === 200) {
      console.log('Message sent');
      setEmailSubmitted(true);
    }
  }
  return (
    <section id='contacts' className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 border border-l-transparent border-r-transparent border-b-transparent relative">
      {/* butterfly */}
      <div className='bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-secondary-500 to-transparent rounded-full h-80 w-80 z-0 absolute top-3/4 -left-2 transform -translate-x-1/2 -translate-y-1/2'>
        <Image src="/images/extra_gif/butterfly4.gif" className='w-full h-full top-0 left-0 absolute' width={500} height={500} />
      </div>
      {/* background */}
      <div className='h-96 w-96 z-0 -left-10 absolute top-3/4 transform md:translate-x-full -translate-y-52'>
        <Image src="/images/background/email.gif" className='w-full h-full top-0 left-0 absolute' width={500} height={500} />
        <div className='h-20 w-full z-0 absolute -bottom-0.5 items-center'>
        <div className='bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-red-600 via-yellow-6  
        00 to-transparent w-48 h-24 rounded-tl-full rounded-tr-full absolute left-24 bottom-0'></div>
        </div>
      </div>
      {/* LetsConnect */}
      <div>
        <h5 className='text-xl font-bold text-slate-200 my-2'>Let&apos;s Connect</h5>
        <p className='text-slate-600 mb-4 max-w-md'>
          I&apos;m currently looking for new opportunitues, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://github.com/AbhinavKhedkar" aria-label="GitHub">
            <BsGithub className='hover:text-slate-600 text-4xl' />
          </Link>
          <Link href="https://www.linkedin.com/in/abhinav-khedkar-4a842014b/" aria-label="LinkedIn">
            <FaLinkedin className='text-blue-600 hover:text-blue-900 font-bold text-4xl' />
          </Link>
          <Link href="https://www.hackerrank.com/profile/abhinavkhedkar01" aria-label="HackerRank">
            <SiHackerrank className='text-green-600 hover:text-green-900 text-4xl' />
          </Link>
          <Link href="https://leetcode.com/abhinavkhedkar01/" aria-label="LeetCode">
            <SiLeetcode className='hover:text-yellow-900 text-4xl' />
          </Link>
          <Link href="https://twitter.com/AbhinavKhedkar" aria-label="X">
            <FaXTwitter className='hover:text-slate-600 text-4xl ' />
          </Link>
        </div>
      </div>
      {/* email form */}
      <div className='z-10'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='text-slate-200 block mb-2 text-sm font-medium'
            >
              Your Email
            </label>
            <input
              name='email'
              type='email'
              id='email'
              required
              className='bg-[#181818] border-[#33353F] placeholder-text-[#ADB7BE] text-slate-200 text-sm rounded-lg block w-full p-2.5'
              placeholder='email@google.com'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='subject'
              className='text-slate-200 block mb-2 text-sm font-medium'
            >
              Subject
            </label>
            <input
              name='subject'
              type='text'
              id='subject'
              required
              className='bg-[#181818] border-[#33353F] placeholder-[#ADB7BE] text-slate-200 text-sm rounded-lg block w-full p-2.5'
              placeholder='Just saying hi'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='text-slate-200 block mb-2 text-sm font-medium'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              className='bg-[#181818] border-[#33353F] placeholder-[#ADB7BE] text-slate-200 text-sm rounded-lg block w-full p-2.5'
              placeholder="Let's talk about"
            />
          </div>
          <button
            type='submit'
            className='bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500 text-slate-200 hover:text-slate-600 border border-slate-200 hover:border-slate-600 font-medium py-2.5 px-5 rounded-lg w-full'
          >
            Send Message
          </button>
          {
            emailSubmitted && (
              <p className='text-green-500 text-sm mt-2'>
                Email sent successfully!
              </p>
            )
          }
        </form>
      </div>
    </section >
  );
}

export default EmailSection;
