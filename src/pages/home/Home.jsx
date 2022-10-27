import React from "react";
import "./home.css";
import { cardsData } from "../../data/cardsData";
import StatisticsCards from "../../components/Cards/StatisticsCards";
import CircularChart from "../../components/circular-chart/CircularChart";
import AreaFeaturedChart from "../../components/area-chart/AreaChart";
import TransactionsTable from "../../components/table/TransactionsTable";

const Home = () => {
  return (
    <>
      <StatisticsCards cardsData={cardsData} />
      <div className="charts my-2 flex flex-wrap gap-2">
        <CircularChart />
        <AreaFeaturedChart title="Last Six Months (Revenue)" />
      </div>
      <div>
        <p className="text-18 opacity-7 capitalize mb-1">Latest Transactions</p>
        <TransactionsTable />
      </div>
    </>
  );
};

export default Home;
