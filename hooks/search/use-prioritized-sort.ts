import { useMemo } from "react";

export type PriotirizeListPropsModeType = "case-sensitive" | "insensitive";

export type PriotirizeListProps<T> = {
  prioritizeList: string[];
  mode: PriotirizeListPropsModeType;
  key: keyof T;
};

export const usePrioritizedSort = <T>(
  values: T[],
  props: PriotirizeListProps<T>
) => {
  const sortedValues = useMemo(() => {
    const isPrioritized = (val: T) => {
      const key = props.key;

      const index = props.prioritizeList.findIndex((v) =>
        props.mode === "case-sensitive"
          ? v === val[key]
          : v.toLocaleLowerCase(["tr"]) ===
            (val[key] as string)?.toLocaleLowerCase(["tr"])
      );
      return index !== -1;
    };

    const getCompareValue = (prev: T, cur: T) => {
      const isPrevPrioritized = isPrioritized(prev);
      const isCurPrioritized = isPrioritized(cur);

      if (isPrevPrioritized && isCurPrioritized) {
        return 0;
      }
      if (isPrevPrioritized) {
        return -1;
      }
      if (isCurPrioritized) {
        return 1;
      }
      return 0;
    };

    const getSortedList = () => {
      const unsortedList = [...values];
      const sortedList = unsortedList.sort((prev, cur) => {
        const comparevalue = getCompareValue(prev, cur);
        return comparevalue;
      });
      return sortedList;
    };

    const sortedList = getSortedList();
    return sortedList;
  }, [values, props]);

  return sortedValues;
};
