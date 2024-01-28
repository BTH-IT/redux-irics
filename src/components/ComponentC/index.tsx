"use client";

import { useAppSelector } from "@/redux/hooks";
import React from "react";
import Iframe from "../Iframe";
import { MODE } from "@/utils/constants";

const ComponentC = () => {
  const linkList = useAppSelector((state) => state.link);

  return (
    <div className="col-span-4 flex flex-col gap-3 overflow-x-hidden overflow-y-auto max-h-screen py-6">
      {linkList.filter((link) => link.mode === MODE.PUBLIC).map((link) => (
        <Iframe {...link} key={link.id} />
      ))}
    </div>
  );
};

export default ComponentC;
