import { Dispatch, createContext, useReducer } from "react";
import { CUSTOM_DETAILS_EMPTY } from "../constans";
import { BulletItem, type CustomDetailsType } from "../types";


export const EducationContext = createContext(CUSTOM_DETAILS_EMPTY);
export const EducationDispatchContext = createContext<Dispatch<CustomDetailsActions>>(()=>{});
export const ExperienceContext = createContext(CUSTOM_DETAILS_EMPTY);
export const ExperienceDispatchContext = createContext<Dispatch<CustomDetailsActions>>(()=>{});
export const OthersContext = createContext(CUSTOM_DETAILS_EMPTY);
export const OthersDispatchContext = createContext<Dispatch<CustomDetailsActions>>(()=>{});

export function CustomDetailsProvider({
  children,
  initialValue,
  ContextToUse,
  DispatcherToUse,
} : {
  children: React.ReactNode;
  initialValue: CustomDetailsType;
  ContextToUse: React.Context<CustomDetailsType>;
  DispatcherToUse: React.Context<Dispatch<CustomDetailsActions>>;
}
) {
  const [customDetails, dispatch] = useReducer(
    customDetailsReducer,
    initialValue,
  );
  // const [socialMedia, dispatchSocialMedia] = useReducer(
  //   socialMediaReducer,
  //   SOCIAL_MEDIA_EXAMPLE,
  // );

  return (
    <ContextToUse.Provider value={customDetails}>
      <DispatcherToUse.Provider value={dispatch}>
        {children}
      </DispatcherToUse.Provider>
    </ContextToUse.Provider>
  );
}

type CustomDetailsActions = {
  type: "changed_input";
  payload: {
    itemId: string;
    property: string;
    value: string;
  };
} | {
  type: "added_bullet";
  payload: {
    sectionId: string;
    bullet: BulletItem;
  };
} | {
  type: "updated_bullet";
  payload: {
    sectionId: string;
    bullet: BulletItem;
  };
} | {
  type: "deleted_bullet";
  payload: {
    sectionId: string;
    bulletId: string;
  };
} | {
  type: "added_section";
  payload: {
    id: UUID;
  };
} | {
  type: "deleted_section";
  payload: {
    id: string;
  };
} | {
  type: "load";
  customDetails: CustomDetailsType;
};

function customDetailsReducer(customDetails: CustomDetailsType, action: CustomDetailsActions): CustomDetailsType {
  switch (action.type) {
    case "changed_input": {
      return customDetails.map((detail) => {
        if (detail.id === action.payload.itemId) {
          return { ...detail, [action.payload.property]: action.payload.value };
        }
        return detail;
      });
    }
    case "added_bullet": {
      return customDetails.map((detail) => {
        if (detail.id === action.payload.sectionId) {
          return {
            ...detail,
            bullets: [...detail.bullets, action.payload.bullet],
          };
        }
        return detail;
      });
    }
    case "updated_bullet": {
      return customDetails.map((detail) => {
        if (detail.id === action.payload.sectionId) {
          const newBullets = detail.bullets.map((bullet) => {
            return bullet.id === action.payload.bullet.id ? action.payload.bullet : bullet;
          });
          return {
            ...detail,
            bullets: newBullets,
          };
        }
        return detail;
      });
    }
    case "deleted_bullet": {
      return customDetails.map((detail) => {
        if (detail.id === action.payload.sectionId) {
          const newBullets = detail.bullets.filter(
            (bullet) => bullet.id !== action.payload.bulletId,
          );
          return {
            ...detail,
            bullets: newBullets,
          };
        }
        return detail;
      });
    }
    case "added_section": {
      return [
        ...customDetails,
        {
          id: action.payload.id,
          title: "New Item",
          subtitle: "",
          date: "",
          description: "",
          bullets: [],
        },
      ];
    }
    case "deleted_section": {
      return customDetails.filter((section) => section.id !== action.payload.id);
    }
    case "load": {
      return action.customDetails;
    }
    default: {
      const exhaustiveCheck: never = action;
      throw Error("Unknown action: " + exhaustiveCheck);
    }
  }
}