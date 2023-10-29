import { FaPaperPlane } from 'react-icons/fa';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

// type SubmitButtonProps = {
//   onSubmit?: Function;
// };
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='group button btn-primary  mx-auto flex items-center justify-center disabled:bg-opacity-65 sm:w-[93%] transition-all'
      disabled={pending}
    >
      Send Message{' '}
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-stone-50'></div>
      ) : (
        <>
          <FaPaperPlane className='text-sm opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1' />
        </>
      )}
    </button>
  );
};

export default SubmitButton;

