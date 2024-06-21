import { Dispatch, PropsWithChildren, createContext, useReducer } from "react";
import { PERSONAL_DETAILS_EXAMPLE, SOCIAL_MEDIA_EXAMPLE } from "../constans";
import { SocialMediaItem, SocialMediaType, type PersonalDetailsType } from "../types";

export const PersonalDetailsContext = createContext(PERSONAL_DETAILS_EXAMPLE);
export const PersonalDetailsDispatchContext = createContext<Dispatch<PersonalDetailsActions>>(() => {});
export const SocialMediaContext = createContext(SOCIAL_MEDIA_EXAMPLE);
export const SocialMediaContextDispatchContext = createContext<Dispatch<SocialMediaActions>>(() => {});

export function PersonalDetailsProvider({ children }: PropsWithChildren) {
  const [personalDetails, dispatchPersonalDetails] = useReducer(
    personalDetailsReducer,
    PERSONAL_DETAILS_EXAMPLE,
  );
  const [socialMedia, dispatchSocialMedia] = useReducer(
    socialMediaReducer,
    SOCIAL_MEDIA_EXAMPLE,
  );

  return (
    <PersonalDetailsContext.Provider value={personalDetails}>
      <PersonalDetailsDispatchContext.Provider value={dispatchPersonalDetails}>
        <SocialMediaContext.Provider value={socialMedia}>
          <SocialMediaContextDispatchContext.Provider
            value={dispatchSocialMedia}
          >
            {children}
          </SocialMediaContextDispatchContext.Provider>
        </SocialMediaContext.Provider>
      </PersonalDetailsDispatchContext.Provider>
    </PersonalDetailsContext.Provider>
  );
}

type ActionWithPayload = {
  type: 'changed_input';
  payload: {
    property: string;
    value: string;
  }
} | {
  type: 'load';
  payload: {
    personalDetails: PersonalDetailsType;
  }
}
export type PersonalDetailsActions = ActionWithPayload;

function personalDetailsReducer(personalDetails: PersonalDetailsType, action: PersonalDetailsActions): PersonalDetailsType {
  switch (action.type) {
    case "changed_input": {
      return {
        ...personalDetails,
        [action.payload.property]: action.payload.value,
      };
    }
    case "load": {
      return action.payload.personalDetails;
    }
    default: {
      const exhaustiveCheck: never = action;
      throw Error("Unknown action: " + exhaustiveCheck);
    }
  }
}


export type SocialMediaActions =
  {
    type: "added";
    payload: {
      socialMedia: SocialMediaItem;
    }
  } | {
    type: "updated";
    payload: {
      socialMedia: SocialMediaItem;
    }
  } | {
    type: "deleted";
    payload: {
      id: string;
    }
  } | {
    type: "load";
    payload: {
      socialMedia: SocialMediaType;
    }
  }

function socialMediaReducer(socialMedia: SocialMediaType, action: SocialMediaActions) {
  switch (action.type) {
    case "added": {
      return [...socialMedia, action.payload.socialMedia];
    }
    case "updated": {
      return socialMedia.map((s) => {
        if (s.id === action.payload.socialMedia.id) {
          return action.payload.socialMedia;
        } else {
          return s;
        }
      });
    }
    case "deleted": {
      return socialMedia.filter((s) => s.id !== action.payload.id);
    }
    case "load": {
      return action.payload.socialMedia;
    }
    default: {
      const exhaustiveCheck: never = action
      throw Error("Unknown action: " + exhaustiveCheck);
    }
  }
}

