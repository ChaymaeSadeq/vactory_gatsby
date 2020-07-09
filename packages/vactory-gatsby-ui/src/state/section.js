import { useState } from "react"
import { createContainer } from "unstated-next"

function usePageSection(initialState = 'initial') {
    let [section, setSection] = useState(initialState);
    let setCurrentSection = (v) => setSection(v);
    return { section, setCurrentSection }
}

const StatePageSection = createContainer(usePageSection);

export {StatePageSection};
