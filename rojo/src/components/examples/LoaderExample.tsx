import { Card } from "../cards/Card";
import { LoadingBar } from "../Loaders/bar/LoadingBar";
import { BtSpinner } from "../Loaders/circles/BtSpinner";
import CircularLoader from "../Loaders/circles/CircularLoader";
import { NbSpinner } from "../Loaders/circles/NbSpinner";
import { Hourglass } from "../Loaders/Hourglass";
import { ComponentExample } from "./ComponentExample";

export const CircleLoaderExample = () => {
  return (
    <ComponentExample title={"Circle loaders example"}>
      <Card width={"10em"} title={"Circle spinner"}>
        <CircularLoader />
      </Card>

      <Card width={"10em"} title={"Nb spinner"}>
        <NbSpinner />
      </Card>

      <Card width={"10em"} title={"Bt spinner"}>
        <BtSpinner />
      </Card>
    </ComponentExample>
  );
};

export const IconLoaderExample = () => {
  return (
    <ComponentExample title={"Icon loaders example"}>
      <Card width={"10em"} title={"Hourglass loader"}>
        <Hourglass />
      </Card>
    </ComponentExample>
  );
};

export const BarLoaderExample = () => {
  return (
    <ComponentExample title={"Loading bar example"}>
      <Card width={"10em"} title={"Loading bar"}>
        <LoadingBar />
      </Card>
    </ComponentExample>
  );
};
