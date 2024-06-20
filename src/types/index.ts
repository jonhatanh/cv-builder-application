export type PersonalDetailsType = {
  name: string;
  email: string;
  phone: string;
  skills: string;
};

export type SocialMediaItem = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  name: string;
  link: string;
  iconName: string;
};

export type SocialMediaType = SocialMediaItem[];

export type BulletItem = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  text: string;
};

export type BulletItemType = BulletItem[];

export type CustomDetailsItem = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  bullets: BulletItemType;
};

export type CustomDetailsType = CustomDetailsItem[];

// export type SocialMediaType = typeof SOCIAL_MEDIA_EXAMPLE;
// export type SocialMediaItem = typeof SOCIAL_MEDIA_EXAMPLE[number];

// export type CustomDetailsType = typeof EDUCATION_EXAMPLE;
// export type CustomDetailsItem = typeof EDUCATION_EXAMPLE[number];
// export type BulletListType = CustomDetailsItem["bullets"];
// export type BulletItem = BulletListType[number];
