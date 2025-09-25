// app/test-error/page.tsx
import { type FC } from "react";

const TestError: FC = () => {
  throw new Error("This is a test error from TestError page!");
};

export default TestError;
