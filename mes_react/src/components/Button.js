import "./Button.css";

export default function Button(props) {
  return (
    <>
      <a
        className={props.classNameBtn}
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        {props.label}
      </a>
    </>
  );
}
