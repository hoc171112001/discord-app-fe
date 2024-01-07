import { Control, FieldValues } from "react-hook-form";

export interface IFormEntries<T extends FieldValues> {
  register: (name: keyof T) => object;
  control?: Control<T>;
  isSubmited?: boolean;
}