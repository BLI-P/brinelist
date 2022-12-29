import logoPrimary from "../assets/logo-todo.jpg";
import logo from "../assets/logo-todo.jpg";

export default function Logo({ className, w, h, primary }) {
  return (
    <img
      className={className || `w-[${w || "80px"}] h-[${h || "80px"}] mb-6`}
      src={!primary ? logoPrimary : logo}
      alt="List"
    />
  );
}
