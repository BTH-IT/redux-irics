import { ILink } from "@/types/link";
import { LINK_TYPE } from "@/utils/constants";
import moment from "moment";
import React from "react";

const Iframe: React.FC<ILink> = ({ type, url, createdAt, updatedAt }) => {
  const renderContent = () => {
    // lấy id của các link tiktok và youtube để có thể embed iframe
    const urlSplit = url.split("/");
    const idTiktok = urlSplit[urlSplit.length - 1];
    const idYoutube = urlSplit[urlSplit.length - 1].split("=")[
      urlSplit[urlSplit.length - 1].split("=").length - 1
    ];
    switch (type) {
      case LINK_TYPE.TIKTOK:
        return (
          <div className="w-full">
            <div className="flex gap-2 justify-between mb-3 font-semibold px-2 items-center">
              <h2>Tiktok</h2>
              <div className="flex gap-3 flex-col">
                <p>Ngày lập: {moment(createdAt).format("L")}</p>
                <p>Ngày chỉnh sửa: {moment(updatedAt).format("L")}</p>
              </div>
            </div>
            <div>
              <iframe
                title="TikTok Video"
                src={`https://www.tiktok.com/embed/v2/${idTiktok}`}
                width="100%"
                height="800px"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        );
      case LINK_TYPE.INSTAGRAM:
        return (
          <div className="w-full">
            <div className="flex gap-2 justify-between mb-3 font-semibold px-2 items-center">
              <h2>Instagram</h2>
              <div className="flex gap-3 flex-col">
                <p>Ngày lập: {moment(createdAt).format("L")}</p>
                <p>Ngày chỉnh sửa: {moment(updatedAt).format("L")}</p>
              </div>
            </div>
            <iframe
              src={`${url}embed/`}
              frameBorder="0"
              style={{ width: "105%", height: "800px" }}
            />
          </div>
        );
      case LINK_TYPE.YOUTUBE:
        return (
          <div className="w-full">
            <div className="flex gap-2 justify-between mb-3 font-semibold px-2 items-center">
              <h2>YouTube Video</h2>
              <div className="flex gap-3 flex-col">
                <p>Ngày lập: {moment(createdAt).format("L")}</p>
                <p>Ngày chỉnh sửa: {moment(updatedAt).format("L")}</p>
              </div>
            </div>
            <iframe
              title="TikTok Video"
              src={`https://www.youtube.com/embed/${idYoutube}`}
              width="100%"
              height="400px"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        );
      default:
        return <p>Unsupported link type</p>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default Iframe;
