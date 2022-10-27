import React from "react";
import { Link } from "react-router-dom";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

const StatisticsCards = ({ cardsData }) => {
  return (
    <div className="cards grid grid-col-200 gap-2">
      {cardsData.map((cardData) => {
        const { id, title, isMoney, text, link, url, classType } = cardData;
        return (
          <div className="card shadow p-1 rounded-sm bg-white" key={id}>
            <div className="flex-center-between">
              <h5 className="opacity-6 uppercase">{title}</h5>
              <div className="flex-center-center gap-1">
                <BiChevronDown className="success-color" />
                <span>+5%</span>
              </div>
            </div>
            <h1 className="text-30 mt-1 mb-1">{isMoney ? "$" + text : text}</h1>
            <div className="flex-center-between">
              <Link to={url} className="underline">
                {link}
              </Link>
              <button className={`btn ${classType} rounded-sm`}>
                <FiUsers />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatisticsCards;
