import {WidgetsMapping} from "vactory-gatsby-ui";
import {
    ThreeColumnsContainer as NewsThreeColumnsContainer,
    TwoColumnsContainer as NewsTwoColumnsContainer
} from "vactory-gatsby-news";
import {
    SliderContainer as GouvernanceSliderContainer,
    TabsContainer as GouvernanceTabsContainer,
} from "vactory-gatsby-gouvernance";

import {
    ThreeColumnsContainer as AcademyThreeColumnsContainer,
    TwoColumnsContainer as AcademyTwoColumnsContainer
} from "vactory-gatsby-academy";

import {
    ThreeColumnsContainer as EventsThreeColumnsContainer,
    TwoColumnsContainer as EventsTwoColumnsContainer
} from "vactory-gatsby-events";

import {
    ThreeColumnsContainer as PressReleaseThreeColumnsContainer,
    TwoColumnsContainer as PressReleaseTwoColumnsContainer
} from "vactory-gatsby-press-release";

import {DefaultContainer as MapDefaultContainer} from "vactory-gatsby-map";
import {ExampleWidgetContainer} from "../../widgets/example-widget/example-widget.container";

const widgets = {
    ...WidgetsMapping,
    'vactory_bootstrap:5': ExampleWidgetContainer,
    'vactory_news:three-columns': NewsThreeColumnsContainer,
    'vactory_news:two-columns': NewsTwoColumnsContainer,
    'vactory_gouvernance:slider': GouvernanceSliderContainer,
    'vactory_gouvernance:tabs': GouvernanceTabsContainer,
    'vactory_locator:default': MapDefaultContainer,
    'vactory_press_release:three-columns': PressReleaseThreeColumnsContainer,
    'vactory_press_release:two-columns': PressReleaseTwoColumnsContainer,
    'vactory_academy:three-columns': AcademyThreeColumnsContainer,
    'vactory_academy:two-columns': AcademyTwoColumnsContainer,
    "vactory_events:three-columns": EventsThreeColumnsContainer,
    "vactory_events:two-columns": EventsTwoColumnsContainer,
};

export default widgets;
