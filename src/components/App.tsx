import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logoPng from "@/assets/webpack.png";
import logoJpg from "@/assets/webpack.jpg";
import Logo from "@/assets/webpack.svg";
import classes from "./App.module.scss";

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>Platform={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={logoPng} alt="png" />
        <img width={175} height={100} src={logoJpg} alt="jpg" />
      </div>
      <div>
        <Logo fill={"red"} width={100} height={100} />
      </div>
      <nav>
        <Link to="/about">About</Link>
        <br />
        <Link to="/shop">Shop</Link>
      </nav>

      <h1>{count}</h1>
      <button className={classes.button} onClick={increment}>
        +1
      </button>
      <Outlet />
    </div>
  );
};
