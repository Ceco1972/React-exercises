import Input from './Input.jsx'
import { useRef } from 'react'
import Modal from './Modal.jsx';


export default function NewProject ({onAdd, hanCan}) {
    const modal = useRef();
    const title =  useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
      const enteredTitle = title.current.value;
      const enteredDescription = description.current.value;
      const enteredDueDate = dueDate.current.value;
      if(
        enteredTitle.trim() === '' || 
        enteredDescription.trim() === '' ||
        enteredDueDate.trim() === ''
        ){
                modal.current.open();
                return;
      }
      
      onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate:enteredDueDate
      });
    }
    return <>
    <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-xl font-bold text-stone-600 my-4">Looks like you forgot to enter a value</p>
        <p className="text-xl font-bold text-stone-600 my-4">Please make sure you provide a value for every input field</p>
    </Modal>
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li>
                <button onClick={hanCan} className='text-stone-800 hover:text-stone-950'>Cancel</button>
            </li>
            <li>
                <button onClick={handleSave} className = "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Save</button>
            </li>
        </menu>
        <div>
            <Input type="text" ref={title} label='Title' />
            <Input ref={description} label="Description" textarea/>
            <Input type="date" ref={dueDate} label="Due Date"/>
        </div>
    </div>
    </>
    
}