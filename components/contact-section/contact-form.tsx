import { sendEmail } from '@/actions/sendEmail';
import SubmitButton from './submit-btn';
import toast from 'react-hot-toast';

const ContactForm = () => {
  let emailError = '';
  return (
    <div className='mt-10 '>
      <form
        className='flex flex-col gap-4 justify-items-center'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (data) {
            console.log(data);
            toast.success('Success! Your message was sent.', {
              duration: 1000,
              position: 'bottom-center',
              className: 'toast-success',
              ariaProps: {
                role: 'status',
                'aria-live': 'assertive',
              },
            });
          }
          if (error) {
            console.log(error);
            // if (error.status)
            emailError =
              'There was a problem with the email address you entered.';
            toast.error(error, {
              duration: 10000,
              position: 'bottom-center',
              className: 'toast-error',
              ariaProps: {
                role: 'status',
                'aria-live': 'assertive',
              },
            });
            return;
          }
        }}
      >
        <div className='w-full flex flex-col '>
          {emailError !== '' && (
            <span className='block text-s text-[#DC3500] text-left px-4 py-0 my-0'>
              {emailError}
            </span>
          )}
          <input
            type='email'
            name='senderEmail'
            required
            maxLength={100}
            className='block h-14 rounded-lg border border-slate-200 px-4 mt-0 pt=0 bg-slate-50 focus:bg-slate-100 active:bg-slate-100  text-slate-700 dark:text-stone-700 dark:bg-stone-100 dark:bg-opacity-90 dark:focus:bg-opacity-100 focus:border-slate-400 active:border-slate-500'
            placeholder='Your email'
            aria-label='email'
          />
        </div>
        <div>
          <p className='italic text-xs text-left px-4 mb-0 text-slate-500 dark:text-stone-400'>
            (Information sent via this form will be stored on Resend's server.)
          </p>
          <textarea
            required
            name='message'
            maxLength={5000}
            className='rounded-lg border border-slate-200 p-4 h-44 w-full bg-slate-50 text-slate-800 dark:text-stone-800  dark:bg-stone-100 dark:bg-opacity-90 dark:focus:bg-opacity-100'
            placeholder='Your message ...'
            aria-label='message'
          />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};
export default ContactForm;

