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
      <Card title={"Circle spinner"}>
        <CircularLoader />
      </Card>

      <Card title={"Nb spinner"}>
        <NbSpinner />
      </Card>

      <Card title={"Bt spinner"}>
        <BtSpinner />
      </Card>
    </ComponentExample>
  );
};

export const IconLoaderExample = () => {
  return (
    <ComponentExample title={"Icon loaders example"}>
      <Card title={"Hourglass loader"}>
        <Hourglass />
      </Card>
    </ComponentExample>
  );
};

export const BarLoaderExample = () => {
  return (
    <ComponentExample title={"Icon loaders example"}>
      <Card title={"Loading bar"}>
        <LoadingBar />
      </Card>
    </ComponentExample>
  );
};
