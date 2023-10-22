import React, { FC, ReactNode, memo } from "react";

type HeadingProps = {
  children: ReactNode;
};

const SectionHeading = memo(({ children }: HeadingProps) => {
  return <h2 className="text-center text-4xl mb-7">{children}</h2>;
});

export default SectionHeading;
