import { StaticImageData } from "next/image";

export interface IWhoToFollow {
  name: string
  tag: string
  avatarImg: string | StaticImageData;
  altImg: string
  url: string
  followURL: string
}