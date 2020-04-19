import {WidgetsMapping} from "vactory-gatsby-ui";
import {TestWidgetContainer} from "./testWidget/testWidget.container";

const widgets = {
    ...WidgetsMapping,
    'vactory_bootstrap:5': TestWidgetContainer
};

export default widgets
