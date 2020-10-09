import {
  ThreeColumnsContainer as EventsThreeColumnsContainer,
  TwoColumnsContainer as EventsTwoColumnsContainer,
  ListContainer as EventsListContainer,
  SliderContainer as EventsSliderContainer
} from "vactory-gatsby-events";

const widgets = {
  "vactory_events:three-columns": EventsThreeColumnsContainer,
  "vactory_events:two-columns": EventsTwoColumnsContainer,
  "vactory_events:list": EventsListContainer,
  "vactory_events:slider": EventsSliderContainer,
};

export default widgets;
