import {WidgetsMapping} from "vactory-gatsby-ui";
import {
    ThreeColumnsContainer as NewsThreeColumnsContainer,
    TwoColumnsContainer as NewsTwoColumnsContainer
} from "vactory-gatsby-news";
import {
    SliderContainer as GouvernanceSliderContainer,
    TabsContainer as GouvernanceTabsContainer,
} from "vactory-gatsby-gouvernance";
import {DefaultContainer as MapDefaultContainer} from "vactory-gatsby-map";
import {ExampleWidgetContainer} from "./example-widget/example-widget.container";

const widgets = {
    ...WidgetsMapping,
    'vactory_bootstrap:5': ExampleWidgetContainer,
    'vactory_news:three-columns': NewsThreeColumnsContainer,
    'vactory_news:two-columns': NewsTwoColumnsContainer,
    'vactory_gouvernance:slider': GouvernanceSliderContainer,
    'vactory_gouvernance:tabs': GouvernanceTabsContainer,
    'vactory_locator:default': MapDefaultContainer,
};

export default widgets
