"use client";
import { useClientTranslation } from "@/config/i18n/client";
import { BaseClientComponent } from "@/types";
import { MenuItem, Select } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import React, { FC } from "react";

const selectProps: any = {
  displayEmpty: true,
  fullWidth: true,
  size: "small",
  IconComponent: () => <KeyboardArrowDownSharpIcon style={{ color: "#aaa" }} />,
  inputProps: { "aria-label": "Without label" },
  defaultValue: "",
};

interface IProps extends BaseClientComponent {}

/**
 * @author
 * @function @DateOfBirth
 **/

export const DateOfBirth: FC<IProps> = ({ lang }) => {
  const { t } = useClientTranslation(lang as string, "register");
  return (
    <div className="my-3">
      <label className="text-desc font-semibold text-xs label-required">
        {t("dobLabel")}
      </label>
      <div className="select-group flex gap-2">
        <Select {...selectProps}>
          <MenuItem value="" disabled>
            <em>{t("monthPlaceholder")}</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Select {...selectProps}>
          <MenuItem value="">
            <em>{t("dayPlaceholder")}</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Select {...selectProps}>
          <MenuItem value="">
            <em>{t("yearPlaceholder")}</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
    </div>
  );
};
