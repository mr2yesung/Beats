import { useFilterSearchParams } from "./useFilterSearchParams";

const switchType = {
  all: "all",
  linear: "linear",
  tactile: "tactile",
  clicky: "clicky",
} as const;

function useFilterSwitchType() {
  const { filterValue: filterSwitchType, setFilterValue: setFilterSwitchType } =
    useFilterSearchParams<(typeof switchType)[keyof typeof switchType]>(
      "switchType",
      switchType.all,
    );

  return { filterSwitchType, setFilterSwitchType };
}

export { useFilterSwitchType, switchType };
