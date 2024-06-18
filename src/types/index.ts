import { EDUCATION_EXAMPLE, PERSONAL_DETAILS_EXAMPLE, SOCIAL_MEDIA_EXAMPLE } from "../constans";


export type PersonalDetailsType = typeof PERSONAL_DETAILS_EXAMPLE;

export type SocialMediaType = typeof SOCIAL_MEDIA_EXAMPLE;
export type SocialMediaItem = typeof SOCIAL_MEDIA_EXAMPLE[number];

export type CustomDetailsType = typeof EDUCATION_EXAMPLE;
export type CustomDetailsItem = typeof EDUCATION_EXAMPLE[number];
export type BulletListType = CustomDetailsItem["bullets"];
export type BulletItem = BulletListType[number];
