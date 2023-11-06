import tabsData from "./tabs.json";

export const sortedData = tabsData.sort((a, b) => a.order - b.order);
