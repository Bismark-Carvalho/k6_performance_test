import http from "k6/http";

import { check, sleep } from "k6";

export const options = {
  vus: 1,
  duration: "2s",
  thresholds: {
    checks: ["rate > 0.99"],
  },
};

export default function () {
  let response = http.get("https://test-api.k6.io/public/crocodiles/");

  check(response, {
    "is status code 200": (r) => r.status === 200,
  });
}
