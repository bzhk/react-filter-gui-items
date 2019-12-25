import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render } from "@testing-library/react";
import MainGrid from "../src/MainGrid";

test("main-grid is rendered", () => {
  const { container } = render(<MainGrid />);

  expect(container.querySelector("#main-grid")).not.toBeNull();
});
