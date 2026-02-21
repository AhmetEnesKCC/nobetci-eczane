import { useEffect } from "react";
import {
  FieldValues,
  Path,
  useForm,
  UseFormProps,
  useWatch,
} from "react-hook-form";
import { useLocalStorage } from "usehooks-ts";

type UseFormParams<U extends FieldValues> = UseFormProps<U>;

/**
 *
 * @param params
 * @param pname
 * @description persisted form for react hook form
 * @returns form
 */
export const usePersistForm = <T extends FieldValues>(
  /**
   * @param UseFormParams
   * @description Classical useform params
   */
  params: UseFormParams<T>,
  /**
   * @param pname
   * @description The name for local storage item related to form values
   * @default "form"
   */
  pname: string = "form"
) => {
  const form = useForm<T>(params);

  const formValues = useWatch({ control: form.control });

  const [saved, setSaved] = useLocalStorage(pname, "");

  const getJSONString = () => {
    try {
      return JSON.stringify(formValues);
    } catch {
      return "";
    }
  };

  const getSavedJSON = (): [typeof params.defaultValues, boolean] => {
    try {
      return [JSON.parse(saved), true];
    } catch {
      return [params.defaultValues, false];
    }
  };

  const getEntries = () => {
    try {
      const [json, isSaved] = getSavedJSON();
      if (!isSaved || !json) {
        return [];
      }
      const entries = Object.entries(json);
      return entries;
    } catch {
      return [];
    }
  };

  const saveEntries = () => {
    const entries = getEntries();
    entries.forEach(([key, value]) => {
      form.setValue(key as Path<T>, value);
    });
  };

  const saveToLocal = () => {
    const value = getJSONString();
    setSaved(value);
  };

  useEffect(() => {
    saveEntries();
  }, []);

  useEffect(() => {
    saveToLocal();
  }, [formValues]);

  return form;
};
