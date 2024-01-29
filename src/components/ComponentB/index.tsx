"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";
import LinkItem from "../LinkItem";
import { useEditContext } from "@/context/toggleEditContext";
import { deleteLink } from "@/redux/features/link-slice";
import { toast } from "react-toastify";

const ComponentB = () => {
  const linkList = useAppSelector((state) => state.link);
  const { setLink } = useEditContext();
  const dispatch = useAppDispatch();

  return (
    <div className="col-span-4 flex flex-col gap-3 overflow-x-hidden overflow-y-auto max-h-screen py-6">
      {linkList.map((link) => (
        <LinkItem
          {...link}
          key={link.id}
          handleEdit={() => {
            setLink(link);
          }}
          handleRemove={() => {
            dispatch(deleteLink(link.id));
            toast.success("Delete Successfully");
          }}
        />
      ))}
    </div>
  );
};

export default ComponentB;
