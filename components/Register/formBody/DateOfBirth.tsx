"use client";
import { useClientTranslation } from "@/config/i18n/client";
import { BaseClientComponent } from "@/types";
import { MenuItem, Select } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import React, { FC } from "react";
import { MONTH_KEYS } from "@/app/authen/register/constants";

const selectProps: any = {
  displayEmpty: true,
  fullWidth: true,
  size: "small",
  IconComponent: () => <KeyboardArrowDownSharpIcon style={{ color: "#aaa" }} />,
  inputProps: { "aria-label": "Without label" },
  defaultValue: "",
  MenuProps: {
    classes: { list: "custom-select" },
    PaperProps: {
      style: {
        maxHeight: 160,
        color: "#aaa",
      },
    },
  },
};

const getMonthsOption = (t: Function) => {
  return MONTH_KEYS.map((month: { key: string; value: number }) => (
    <MenuItem key={month.key} value={month.value}>
      {t(month.key)}
    </MenuItem>
  ));
};

const generateDaysInMonth = () => {
  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  return days.map((days) => (
    <MenuItem key={days} value={days}>
      {days}
    </MenuItem>
  ));
};

const generateYear = () => {
  const years = Array.from({ length: 100 }, (_, index) => {
    if (index + 1970 > 2020) return;
    return index + 1970;
  });
  return years.map((years) =>
    years ? (
      <MenuItem key={years} value={years}>
        {years}
      </MenuItem>
    ) : null
  );
};

interface IProps extends BaseClientComponent {}

/**
 * @author
 * @function @DateOfBirth
 **/

export const DateOfBirth: FC<IProps> = ({ lang }) => {
  const { t } = useClientTranslation(lang as string, "register");
  return (
    <div className="my-4">
      <label className="text-desc font-semibold mb-2 text-xs label-required inline-block">
        {t("dobLabel")}
      </label>
      <div className="select-group flex gap-2">
        <Select {...selectProps}>
          <MenuItem value="" style={{ display: "none" }}>
            <em>{t("monthPlaceholder")}</em>
          </MenuItem>
          {getMonthsOption(t)}
        </Select>
        <Select {...selectProps}>
          <MenuItem style={{ display: "none" }} value="">
            <em>{t("dayPlaceholder")}</em>
          </MenuItem>
          {generateDaysInMonth()}
        </Select>
        <Select {...selectProps}>
          <MenuItem style={{ display: "none" }} value="">
            <em>{t("yearPlaceholder")}</em>
          </MenuItem>
          {generateYear()}
        </Select>
      </div>
    </div>
  );
};
