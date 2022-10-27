import React from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const CircularChart = () => {
  return (
    <div className="revenue-chart p-1 bg-white shadow rounded-sm">
      <div className="flex-center-between">
        <p className="text-18 opacity-7 capitalize">total revenue</p>
        <HiEllipsisVertical />
      </div>
      <div className="text-center">
        <CircularProgressbar
          value={70}
          text={"70%"}
          strokeWidth={4}
          className="circular-chart"
        />
        <p className="text-muted mt-1">Total Sales Made</p>
        <h1 className="text-30">$430.322</h1>
        <p className="mt-1 text-muted">
          Previous transactions processing, Last paymenst may not be included
        </p>
        <div className="flex-center-evenly my-2">
          <div>
            <p className="text-muted">Target</p>
            <p className="mt-1 txt-muted danger-color">
              <BiChevronDown /> $12.6k
            </p>
          </div>
          <div>
            <p className="text-muted">Last Week</p>
            <p className="mt-1 txt-muted success-color">
              <BiChevronUp /> $122.6k
            </p>
          </div>
          <div>
            <p className="text-muted">Last Month</p>
            <p className="mt-1 txt-muted danger-color">
              <BiChevronDown /> $192.6k
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularChart;
