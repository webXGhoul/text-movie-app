import { SerializedError } from "@reduxjs/toolkit";
import React, { FC } from "react";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

interface ErrorPageProps {
  error: SerializedError;
}

const ErrorPage: FC<ErrorPageProps> = ({ error }) => {
  return (
    <div>
      <ErrorMessage />
    </div>
  );
};

export default ErrorPage;
