import { useRef, useImperativeHandle } from 'react';

export default function ResultModal({ ref, result, targetTime }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
      dialog.current.showModal();
    }
    };
  });

  return (
    // this built-in dialog element by default is invisible. Adding the "open" attribute makes it visible
    // the form element with method="dialog" makes the close button automatically close the dialog
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
}
