import { useContext } from "react";
import { TeamsFxContext } from "./Context";
import { Welcome } from "./sample/Welcome";

export default function Tab() {
  const { themeString } = useContext(TeamsFxContext);
  return (
    <div
      className={
        themeString === "default"
          ? "light"
          : themeString === "dark"
          ? "dark"
          : "contrast"
      }
    >
      <Welcome />
    </div>
  );
}
