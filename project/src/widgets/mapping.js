import { WidgetsMapping } from "vactory-gatsby-ui";
import { ExampleWidgetContainer } from "./example-widget/example-widget.container";
import { ThreeColumnsContainer as EventsThreeColumnsContainer } from "vactory-gatsby-events";
import { TwoColumnsContainer as EventsTwoColumnsContainer } from "vactory-gatsby-events";
const widgets = {
  ...WidgetsMapping,
  "vactory_bootstrap:5": ExampleWidgetContainer,
  "vactory_events:three-columns": EventsThreeColumnsContainer,
  "vactory_events:two-columns": EventsTwoColumnsContainer,
};
console.log(widgets);
export default widgets;
