import { LayoutShowCase } from "../showcase/LayoutShowCase";
import { LoaderShowCase } from "../showcase/LoaderShowCase";

export const ComponentOverview = () => {
  return (
    <div>
      <h1>Components</h1>
      <LayoutShowCase />
      <LoaderShowCase />
    </div>
  );
};
