"use client";
import { BaseClientComponent } from "@/types";
import { MenuItem, Select } from "@mui/material";
import React, { FC } from "react";

interface IProps extends BaseClientComponent {
  label: string;
}

/**
 * @author
 * @function @DateOfBirth
 **/

export const DateOfBirth: FC<IProps> = ({ label }) => {
  return (
    <div className="my-3">
      <label className="text-desc font-semibold text-xs label-required">
        {label}
      </label>
      <div className="select-group flex gap-2">
        <Select
          displayEmpty
          fullWidth
          size="small"
          defaultValue={""}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Select
          displayEmpty
          fullWidth
          size="small"
          defaultValue={""}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Select
          displayEmpty
          fullWidth
          size="small"
          defaultValue={""}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
    </div>
  );
};
