import { useData } from "@microsoft/teamsfx-react";
import { useContext } from "react";
import { TeamsFxContext } from "../Context";
import { Image, Spinner } from "@fluentui/react-components";
import { CurrentUser } from "./CurrentUser";
import "./Welcome.css";

export function Welcome() {
  const { teamsUserCredential } = useContext(TeamsFxContext);
  const { loading, data, error } = useData(async () => {
    if (teamsUserCredential) {
      const userInfo = await teamsUserCredential.getUserInfo();
      return userInfo;
    }
  });
  const userName = loading || error ? "" : data!.displayName;
  return (
    <div className="welcome page">
      <div className="narrow page-padding">
        <Image src="hello.png" />
        <h1 className="center">
          Congratulations{userName ? ", " + userName : ""}!
        </h1>
        <div className="content">
          {loading ? (
            <Spinner style={{ margin: 100 }} />
          ) : error ? (
            <div>
              <h2>Failed to get basic user info</h2>
              <div className="error">{error.toString()}</div>
            </div>
          ) : (
            <CurrentUser userName={userName} />
          )}
        </div>
      </div>
    </div>
  );
}
