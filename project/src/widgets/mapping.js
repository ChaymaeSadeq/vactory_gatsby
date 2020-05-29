import {WidgetsMapping} from "vactory-gatsby-ui";
import {ThreeColumnsContainer as NewsThreeColumnsContainer} from "vactory-gatsby-news";
import {TwoColumnsContainer as NewsTwoColumnsContainer} from "vactory-gatsby-news";
import {ExampleWidgetContainer} from "./example-widget/example-widget.container";

const widgets = {
    ...WidgetsMapping,
    'vactory_bootstrap:5': ExampleWidgetContainer,
    'vactory_news:three-columns': NewsThreeColumnsContainer,
    'vactory_news:two-columns': NewsTwoColumnsContainer
};

export default widgets
