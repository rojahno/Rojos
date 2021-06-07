import { LayoutShowCase } from "../examples/LayoutShowCase";
import { LoaderShowCase } from "../examples/LoaderShowCase";
import { Content } from "../layout/Content";

export const ComponentOverview = () => {
  return (
    <div>
      <h1>Components</h1>
      <LayoutShowCase />
      <LoaderShowCase />
    </div>
  );
};
