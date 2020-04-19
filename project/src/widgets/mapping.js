import {WidgetsMapping} from "vactory-gatsby-ui";
import {ExampleWidgetContainer} from "./example-widget/example-widget.container";

const widgets = {
    ...WidgetsMapping,
    'vactory_bootstrap:5': ExampleWidgetContainer
};

export default widgets
