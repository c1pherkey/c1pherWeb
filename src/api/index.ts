import { NowRequest, NowResponse } from "@now/node";
import Axios from "axios";
const uptimeRobotToken = process.env.UPTIME_ROBOT_KEY;

export default async (req: NowRequest, res: NowResponse) => {
    if (!uptimeRobotToken) {
        throw new Error('UPTIME_ROBOT_KEY is not defined in the environment variables.');
    }
  let urlencoded = new URLSearchParams();
  urlencoded.append("api_key", uptimeRobotToken);
  urlencoded.append("response_times", "1");
  urlencoded.append("custom_uptime_ratios", "7-30");
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let monitors = await Axios.post(
      `https://api.uptimerobot.com/v2/getMonitors`,
      urlencoded,
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
        },
      }
    );
    let m = monitors.data.monitors;

    for (let i in m) {
      if (m[i].url !== undefined) {
        delete m[i].url;
      }
    }
    res.json(m);
  } catch {
    res.status(500).send("Error");
  }
};