import React from "react";
import "./single.css";
import TransactionsTable from "../../components/table/TransactionsTable";
import AreaFeaturedChart from "../../components/area-chart/AreaChart";

const Single = () => {
  return (
    <div className="single">
      <div className="top-wrapper flex gap-2">
        <div className="profile-card flex gap-2 bg-white rounded-sm p-3 border">
          <img
            src="/images/8e2ffbb4ba (1).png"
            alt=""
            className="profile-avatar-xl"
          />
          <div className="info">
            <h1 className="text-25">Wabweni Brian</h1>
            <p className="text-14 opacity-7 mt-1">
              Email: wabwenib66@gmail.com
            </p>
            <p className="text-14 opacity-7 mt-1">Phone:+256 775 358738</p>
            <p className="text-14 opacity-7 mt-1">
              Address: Kampala, Makere Kikoni
            </p>
            <p className="text-14 opacity-7 mt-1">Country:Uganda</p>
          </div>
        </div>
        <AreaFeaturedChart
          title="Last Six Months (Spending)"
          className="chart"
        />
      </div>
      <div className="table py-2">
        <h1 className="text-18 opacity-7 mb-1">Last Transactions</h1>
        <div className="dataTable w-100 bg-white">
          <TransactionsTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
