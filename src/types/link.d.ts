import { LINK_TYPE, MODE } from "@/utils/constants";

interface ILink {
  id: string;
  url: string;
  mode: MODE;
  type: LINK_TYPE;
  createdAt: number;
  updatedAt: number;
}