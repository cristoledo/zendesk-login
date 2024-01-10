"use client"
import { useRef } from 'react';
const YOUR_ZENDESK_SUBDOMAIN : string = process.env.NEXT_PUBLIC_YOUR_ZENDESK_SUBDOMAIN as string;
const TOKEN : string = process.env.NEXT_PUBLIC_TOKEN as string;
export default function Home() { 
  const formRef = useRef<HTMLFormElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = async () => {
    // const response = await handleYourLogin();
    inputRef.current!.value = TOKEN;
    formRef.current!.submit();
  }

  return (
    <div>      
        <button
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          onClick={handleClick}
        >
          Log in
        </button>
      <form ref={formRef} action={`https://${YOUR_ZENDESK_SUBDOMAIN}.zendesk.com/access/jwt`} method="post">
        <input ref={inputRef} type="hidden" name="jwt"></input>
      </form>
    </div>
  );
}
