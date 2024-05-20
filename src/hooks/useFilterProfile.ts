import { useFilterSearchParams } from "./useFilterSearchParams";

const profile = {
  all: "all",
  normal: "normal",
  low: "low",
} as const;

function useFilterProfile() {
  const { filterValue: filterProfile, setFilterValue: setFilterProfile } =
    useFilterSearchParams<(typeof profile)[keyof typeof profile]>(
      "profile",
      profile.all,
    );

  return { filterProfile, setFilterProfile };
}

export { useFilterProfile, profile };
