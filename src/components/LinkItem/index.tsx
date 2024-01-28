import { ILink } from "@/types/link";
import { LINK_TYPE } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import Instagram from "@/assets/instagram.webp";
import Tiktok from "@/assets/tiktok.jpg";
import Youtube from "@/assets/youtube.webp";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";

interface LinkItemProps extends ILink {
  handleEdit: () => void;
  handleRemove: () => void;
}

const RenderLinkIcon = ({ type }: { type: LINK_TYPE }) => {
  switch (type) {
    case LINK_TYPE.YOUTUBE:
      return (
        <Image
          src={Youtube}
          alt="youtube-icon"
          className="rounded-full"
          width={100}
          height={100}
        />
      );
    case LINK_TYPE.INSTAGRAM:
      return (
        <Image
          src={Instagram}
          alt="instagram-icon"
          className="rounded-full"
          width={100}
          height={100}
        />
      );
    case LINK_TYPE.TIKTOK:
      return (
        <Image
          src={Tiktok}
          alt="tiktok-icon"
          className="rounded-full"
          width={100}
          height={100}
        />
      );
  }
};

const LinkItem = ({ id, type, url, mode, createdAt, updatedAt, handleEdit, handleRemove }: LinkItemProps) => {
  return (
    <div className="group relative bg-slate-200 p-4 rounded-lg flex items-center gap-3">
      <RenderLinkIcon type={type} />
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold">
          Mã: <span className="line-clamp-1 font-light">{id}</span>
        </h2>
        <h2 className="font-semibold line-clamp-1">
          Đường dẫn:{" "}
          <Link
            href={url}
            target="_blank"
            className="font-light hover:text-blue-400 transition-all line-clamp-1"
          >
            {url}
          </Link>
        </h2>
        <h2 className="font-semibold line-clamp-1">
          Mode: <span className="font-light">{mode}</span>
        </h2>
        <h2 className="font-semibold line-clamp-1">
          Ngày tạo:{" "}
          <span className="font-light">
            {moment(createdAt).startOf("second").fromNow()}
          </span>
        </h2>
        <h2 className="font-semibold line-clamp-1">
          Ngày cập nhật:{" "}
          <span className="font-light">
            {moment(updatedAt).startOf("second").fromNow()}
          </span>
        </h2>
      </div>
      <div className="absolute p-2 rounded-md bg-blue-500 flex items-center gap-2 top-2 right-2 text-white text-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-all"
        onClick={handleEdit}
      >
        <EditIcon className="!w-4 !h-4" />
        <span>Edit</span>
      </div>
      <div className="absolute p-2 rounded-md bg-red-500 flex items-center gap-2 bottom-2 right-2 text-white text-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-all"
        onClick={handleRemove}
      >
        <DeleteIcon className="!w-4 !h-4" />
        <span>Remove</span>
      </div>
    </div>
  );
};

export default LinkItem;
