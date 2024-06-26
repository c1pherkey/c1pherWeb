import React from "react";
import { Card } from "@/components/ui/card";

interface StatusProps {
    name: string;
    code: number;
    uptime: string;
    responseTime: { value: number }[];
  }
  
  const Status: React.FC<StatusProps> = ({ name, code, uptime, responseTime }) => {
    return (
      <Card
        className="rounded-sm bg-gray-700 m-4 p-4 relative"
        style={{ width: "24rem", height: "16rem" }}
      >
        <h1 className="text-2xl font-bold text-blue-200">{name}</h1>
        <div
          className="m-4 absolute top-0 right-0 rounded-full w-4 h-4"
          style={{
            background:
              code === 2
                ? "#47cbac"
                : code === 1
                ? "#1a202c"
                : code === 8
                ? "#f5d5be"
                : "#cd43b3",
          }}
        />
        <div className="text-lg mb-2">
          Current status:{" "}
          <span className="text-blue-400">
            {code === 2
              ? "Up"
              : code === 1
              ? "Checking"
              : code === 8
              ? "Minor Outage"
              : "Down"}
          </span>
        </div>
        <div>
          Up{" "}
          <span className="text-blue-400">
            {Number(uptime.split("-")[0]).toFixed(2)}%
          </span>{" "}
          over <span className="text-blue-400">7</span> days
        </div>
        <div>
          Up{" "}
          <span className="text-blue-400">
            {Number(uptime.split("-")[1]).toFixed(2)}%
          </span>{" "}
          over <span className="text-blue-400">30</span> days
        </div>
  
        <div className="mt-2">
          Average Response Time:{" "}
          <span className="text-blue-400">
            {responseTime.length > 1
              ? (
                  responseTime.map((a) => a.value).reduce((a, b) => a + b) /
                  responseTime.length
                ).toFixed(0)
              : 0}
            ms
          </span>
        </div>
        {/* Remplacez le composant Trend par votre composant de carte Shadow UI ici */}
      </Card>
    );
  };

  export default Status;