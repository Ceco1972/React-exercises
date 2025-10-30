import { forwardRef, useRef } from 'react';
// this forwardRef does not have to be used for React version 19 and above, but it's used here for demonstration purposes
const Form = forwardRef(function Form(props, ref) {
    const form = React.useRef();
    React.useImperativeHandle(ref, () => {
        return {
            clear(){
                form.current.reset();
            },
        };
    } );
  return (
    <form ref={form}>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>

      <p>
        <label>Email</label>
        <input type="email" />
      </p>
      <p id="actions">
        <button>Save</button>
      </p>
    </form>
  );
  
});

export default Form;
