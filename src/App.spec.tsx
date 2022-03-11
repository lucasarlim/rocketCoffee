import { render } from "@testing-library/react";
import Home from "./pages/Home";

describe("Home Page", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Home />)
    expect(getByText('Great Coffee')).toBeInTheDocument()
  });
});
  


