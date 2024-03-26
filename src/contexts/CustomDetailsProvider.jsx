import { createContext, useReducer } from "react";

export const EducationContext = createContext([
  {
    id: crypto.randomUUID(),
    title: "",
    subtitle: "",
    date: "",
    description: "",
    bullets: [
      {
        id: crypto.randomUUID(),
        text: "",
      },
    ],
  },
]);
export const EducationDispatchContext = createContext(null);
export const ExperienceContext = createContext(null);
export const ExperienceDispatchContext = createContext(null);
export const OthersContext = createContext(null);
export const OthersDispatchContext = createContext(null);

export function CustomDetailsProvider({
  children,
  initialValue,
  ContextToUse,
  DispatcherToUse,
}) {
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

function customDetailsReducer(customDetails, action) {
  switch (action.type) {
    case "changed_input": {
      return customDetails.map((detail) => {
        if (detail.id === action.itemId) {
          return { ...detail, [action.property]: action.value };
        }
        return detail;
      });
    }
    case "added_bullet": {
      return customDetails.map((detail) => {
        if (detail.id === action.sectionId) {
          return {
            ...detail,
            bullets: [...detail.bullets, action.bullet],
          };
        }
        return detail;
      });
    }
    case "updated_bullet": {
      return customDetails.map((detail) => {
        if (detail.id === action.sectionId) {
          const newBullets = detail.bullets.map((bullet) => {
            return bullet.id === action.bullet.id ? action.bullet : bullet;
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
        if (detail.id === action.sectionId) {
          const newBullets = detail.bullets.filter(
            (bullet) => bullet.id !== action.bulletId,
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
          id: action.id,
          title: "New Item",
          subtitle: "",
          date: "",
          description: "",
          bullets: [],
        },
      ];
    }
    case "deleted_section": {
      return customDetails.filter((section) => section.id !== action.id);
    }
    case "load": {
      return action.customDetails;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}