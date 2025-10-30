
export default function Input({ ref, label, ...props }) {
  // Todo: Accept forwarded ref and "connect" it to the <input> element
  return (
    <p className="control">
      <label>{label}</label>
      {/* Todo: "Forward" remaining props to <input> element */}
      <input ref={ref} {...props}/>
    </p>
  );
}

