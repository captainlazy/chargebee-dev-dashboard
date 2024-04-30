import React from "react";
import { Card } from "dev-ui-library-cb";
import { CARD_DATA } from "../lib/consts/cards";

export const Dashboard = () => {
  return (
    <div>
      <div className="p-6">
        <p class="text-2xl font-bold ">Good morning, Panel!</p>
      </div>
      <hr />

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
    </div>
  );
};
