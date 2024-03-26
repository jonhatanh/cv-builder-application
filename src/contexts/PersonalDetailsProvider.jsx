import { createContext, useContext, useReducer } from "react";
import { PERSONAL_DETAILS_EXAMPLE, SOCIAL_MEDIA_EXAMPLE } from "../constans";

export const PersonalDetailsContext = createContext(null);
export const PersonalDetailsDispatchContext = createContext(null);
export const SocialMediaContext = createContext(null);
export const SocialMediaContextDispatchContext = createContext(null);

export function PersonalDetailsProvider({ children }) {
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

function personalDetailsReducer(personalDetails, action) {
  switch (action.type) {
    case "changed_input": {
      return {
        ...personalDetails,
        [action.property]: action.value,
      };
    }
    case "load": {
      return action.personalDetails;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
function socialMediaReducer(socialMedia, action) {
  switch (action.type) {
    case "added": {
      return [...socialMedia, action.socialMedia];
    }
    case "updated": {
      return socialMedia.map((s) => {
        if (s.id === action.socialMedia.id) {
          return action.socialMedia;
        } else {
          return s;
        }
      });
    }
    case "deleted": {
      return socialMedia.filter((s) => s.id !== action.id);
    }
    case "load": {
      return action.socialMedia;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

