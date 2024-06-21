import { ICONS } from "../constans";

export type PersonalDetailsType = {
  name: string;
  email: string;
  phone: string;
  skills: string;
};

export type SocialMediaItem = {
  id: UUID;
  name: string;
  link: string;
  iconName: IconName;
};

export type SocialMediaType = SocialMediaItem[];

export type BulletItem = {
  id: UUID;
  text: string;
};

export type BulletItemType = BulletItem[];

export type CustomDetailsItem = {
  id: UUID;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  bullets: BulletItemType;
};

export type CustomDetailsType = CustomDetailsItem[];

export type AvailableSections = 0 | 1 | 2 | 3 | 4;

type IconTuple = typeof ICONS[number];
export type IconName = IconTuple["name"];
// export type SocialMediaType = typeof SOCIAL_MEDIA_EXAMPLE;
// export type SocialMediaItem = typeof SOCIAL_MEDIA_EXAMPLE[number];

// export type CustomDetailsType = typeof EDUCATION_EXAMPLE;
// export type CustomDetailsItem = typeof EDUCATION_EXAMPLE[number];
// export type BulletListType = CustomDetailsItem["bullets"];
// export type BulletItem = BulletListType[number];
