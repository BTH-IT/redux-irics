"use client";

import { addLink, updateLink } from "@/redux/features/link-slice";
import { useAppDispatch } from "@/redux/hooks";
import { ILink } from "@/types/link";
import { LINK_TYPE, MODE, REGEX } from "@/utils/constants";
import { FormikState, useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";
import { useEditContext } from "@/context/toggleEditContext";

type FormValuesType = Omit<
  ILink,
  "id" | "likeCounter" | "createdAt" | "updatedAt"
>;

const validationSchema = Yup.object({
  url: Yup.string()
    .required("This field is required")
    .matches(REGEX.IS_VALID_URL, "Please enter link is valid"),
  mode: Yup.string()
    .oneOf(Object.values(MODE))
    .required("This field is required"),
  type: Yup.string()
    .oneOf(Object.values(LINK_TYPE))
    .required("This field is required"),
});

const ComponentA = () => {
  const dispatch = useAppDispatch();

  const {setLink, link} =useEditContext();
  
  const formik = useFormik<FormValuesType>({
    initialValues: {
      url: "",
      mode: MODE.PUBLIC,
      type: LINK_TYPE.YOUTUBE,
    },
    validationSchema,
    onSubmit: (values) => {
      if (values.type === LINK_TYPE.YOUTUBE && !values.url.match(REGEX.IS_YOUTUBE_URL)) {
        toast.warning("Please choose correctly type of url")
        return;
      }

      if (values.type === LINK_TYPE.INSTAGRAM && !values.url.match(REGEX.IS_INSTAGRAM_URL)) {
        toast.warning("Please choose correctly type of url")
        return;
      }

      if (values.type === LINK_TYPE.TIKTOK && !values.url.match(REGEX.IS_TIKTOK_URL)) {
        toast.warning("Please choose correctly type of url")
        return;
      }

      if (link) {
        dispatch(updateLink({
          ...link,
          ...values,
          updatedAt: Date.now(),
        }))
  
        toast.success("Editing Sucessfully!")
      } else {
        dispatch(addLink({
          ...values,
          id: uuidv4(),
          createdAt: Date.now(),
          updatedAt: Date.now(),
        }))
  
        toast.success("Adding Sucessfully!")
      }

      formik.resetForm({
        url: "",
        mode: MODE.PUBLIC,
        type: LINK_TYPE.YOUTUBE,
      } as Partial<FormikState<FormValuesType>>);

      setLink(null);
    },
  });

  useEffect(() => {
    if (link) {
      formik.setValues({
        url: link.url,
        mode: link.mode,
        type: link.type,
      })
    }
  }, [link])

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="col-span-4 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="url" className="font-medium text-xl">
          URL
        </label>
        <input
          type="text"
          className="p-3 border border-gray-200 rounded-md outline-none focus:border-blue-500 transition-all"
          name="url"
          id="url"
          placeholder="enter url..."
          onChange={formik.handleChange}
          value={formik.values.url}
        />
        <span className="text-red-500">
          {formik.errors.url && formik.touched.url ? formik.errors.url : ""}
          &nbsp;
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="mode" className="font-medium text-xl">
          Mode
        </label>
        <div className="flex gap-3">
          <div className="flex gap-3 items-center">
            <label htmlFor="publicMode">Public</label>
            <input
              type="radio"
              name="mode"
              id="publicMode"
              onChange={formik.handleChange}
              value={MODE.PUBLIC}
              checked={MODE.PUBLIC === formik.values.mode}
            />
          </div>
          <div className="flex gap-3 items-center">
            <label htmlFor="privateMode">Private</label>
            <input
              type="radio"
              name="mode"
              id="privateMode"
              onChange={formik.handleChange}
              value={MODE.PRIVATE}
              checked={MODE.PRIVATE === formik.values.mode}
            />
          </div>
        </div>
        <span className="text-red-500">
          {formik.errors.mode && formik.touched.mode ? formik.errors.mode : ""}
          &nbsp;
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="type" className="font-medium text-xl">
          Type
        </label>
        <div className="flex gap-3">
          <div className="flex gap-3 items-center">
            <label htmlFor="youtube">Youtube</label>
            <input
              type="radio"
              name="type"
              id="youtube"
              onChange={formik.handleChange}
              value={LINK_TYPE.YOUTUBE}
              checked={LINK_TYPE.YOUTUBE === formik.values.type}
            />
          </div>
          <div className="flex gap-3 items-center">
            <label htmlFor="instagram">Instargram</label>
            <input
              type="radio"
              name="type"
              id="instagram"
              onChange={formik.handleChange}
              value={LINK_TYPE.INSTAGRAM}
              checked={LINK_TYPE.INSTAGRAM === formik.values.type}
            />
          </div>
          <div className="flex gap-3 items-center">
            <label htmlFor="tiktok">Tiktok</label>
            <input
              type="radio"
              name="type"
              id="tiktok"
              onChange={formik.handleChange}
              value={LINK_TYPE.TIKTOK}
              checked={LINK_TYPE.TIKTOK === formik.values.type}
            />
          </div>
        </div>
        <span className="text-red-500">
          {formik.errors.type && formik.touched.type ? formik.errors.type : ""}
          &nbsp;
        </span>
      </div>
      <button
        disabled={formik.isSubmitting}
        type="submit"
        className="w-full p-4 bg-blue-500 border border-transparent text-white font-semibold text-xl rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default ComponentA;
