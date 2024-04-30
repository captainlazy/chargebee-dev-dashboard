import React from "react";
import { Card } from "dev-ui-library-cb";
import { CARD_DATA } from "../lib/consts/cards";
import DefaultReChartsComponent from "./recharts/DefaultRechartsComponents";
import BarChartComponent from "./recharts/BarChartComponent";

export const Dashboard = () => {
  return (
    <div>
      <div className="p-6">
        <p class="text-2xl font-bold ">Good morning, Panel!</p>
      </div>

      <div class="grid grid-cols-4 gap-4 p-4">
        {CARD_DATA.map((item) => (
          <Card
            heading={item.heading}
            textData={item.textData}
            impressions={item.impressions}
            color={item.color}
            label={item.label}
          />
        ))}
      </div>

      <div className="p-6">
        <p class="text-xl font-bold ">Annual Stats </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-md m-2">
          <div className="p-6">
            <p class="text-l font-bold ">Retention Line Graph</p>
          </div>
          <DefaultReChartsComponent />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md m-2">
          <div className="p-6">
            <p class="text-l font-bold ">Sales Bar Chart</p>
          </div>
          <BarChartComponent />
        </div>
      </div>
    </div>
  );
};
