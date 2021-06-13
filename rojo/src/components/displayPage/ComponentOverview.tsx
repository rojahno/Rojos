import { CollapsibleShowCase } from "../showcase/CollapsibleShowCase";
import { LayoutShowCase } from "../showcase/LayoutShowCase";
import { LoaderShowCase } from "../showcase/LoaderShowCase";

export const ComponentOverview = () => {
  return (
    <div>
      <h1>Components</h1>
      <LayoutShowCase />
      <LoaderShowCase />
      <CollapsibleShowCase/>
    </div>
  );
};
