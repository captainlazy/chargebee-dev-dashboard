import React from "react";
import { Badge, DeafaultForm } from "dev-ui-library-cb";

export const WhatsNew = () => {
  return (
    <div>
      <div className="p-6">
        <p className="text-2xl text-gray-700 font-bold text-center">
          ChargeBee in Headlines
        </p>
        <hr />
      </div>
      <div className="flex items-center justify-around">
        <div>
          <p className="text-xl font-bold text-gray-700 text-center">
            Editor's pick
          </p>

          <div className="bg-white p-6 rounded-xl shadow-md m-2">
            <div className="w-72">
              <p className="text-l text-gray-700">
                Championing Innovation: Unveiling the Beelievers Awards Winners
              </p>
              <div className="flex items-center justify-center">
                <Badge color="indigo" label="Building Chargebee" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md m-2">
            <div className="w-72">
              <p className="text-l text-gray-700">
                How to Choose the Right SaaS Accounting Software for Your
                Business?
              </p>
              <div className="flex items-center justify-center">
                <Badge color="green" label="Growth" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md m-2">
            <div className="w-72">
              <p className="text-l text-gray-700">
                Ease the load off your finance heroes
              </p>
              <div className="flex gap-1 items-center justify-center">
                <Badge color="indigo" label="Product" />
                <Badge color="indigo" label="Tech" />
                <Badge color="green" label="Best of" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 m-6">
          <DeafaultForm />
        </div>
      </div>
    </div>
  );
};
