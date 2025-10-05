// export default function TabButton(props) {
//     return <li><button>{props.children}</button></li> 
// }

//using children
export default function TabButton({children, isSelected, ...props}) {
    // in vanilla JS you would have this:
    // document.querySelector('button').addEventListener('click', () => {
    //     console.log('You clicked me!');
    // })

    //instead we use:
    // function onClickHandler() {
    //     console.log(`you clicked me!`);
    // }
    return <li><button className={isSelected ? 'active' : undefined} {...props}>{children}</button></li> 
}   

//using attributes
// export default function TabButton({ label }) {
//     return (
//     <li>
//         <button>{label}</button>
//     </li>
//     )
// }