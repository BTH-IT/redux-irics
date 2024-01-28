export enum MODE {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
};

export enum LINK_TYPE {
  INSTAGRAM = "INSTAGRAM",
  YOUTUBE = "YOUTUBE",
  TIKTOK = "TIKTOK",
};

export const REGEX = {
  IS_YOUTUBE_URL: /^https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)([a-zA-Z0-9_-]{11})/,
  IS_VALID_URL: /https?:\/\/(?:www\.)?(?:instagram\.com\/(?:p|reels)\/[a-zA-Z0-9_-]+|youtube\.com\/watch\?v=[a-zA-Z0-9_-]+|tiktok\.com\/@[^\/]+\/video\/[0-9]+)/,
  IS_INSTAGRAM_URL: /^https?:\/\/(?:www\.)?instagram\.com\/(?:p|tv|reel)\/([a-zA-Z0-9_-]+)/,
  IS_TIKTOK_URL: /^https?:\/\/(?:www\.)?tiktok\.com\/@([^/]+)\/video\/(\d+)/,
};