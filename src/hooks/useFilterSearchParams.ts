import { useSearchParams } from "react-router-dom";

function useFilterSearchParams<T extends string>(key: string, initialValue: T) {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterValue = searchParams.get(key) || initialValue;

  function setFilterValue(filterValue: T) {
    setSearchParams(
      (prev) => {
        prev.set(key, filterValue);
        return prev;
      },
      { replace: true },
    );
  }

  return { filterValue, setFilterValue };
}

export { useFilterSearchParams };
