import { EDUCATION_EXAMPLE, EXPERIENCE_EXAMPLE, OTHERS_EXAMPLE } from "../constans";
import {
  CustomDetailsProvider,
  EducationContext,
  EducationDispatchContext,
  ExperienceContext,
  ExperienceDispatchContext,
  OthersContext,
  OthersDispatchContext,
} from "./CustomDetailsProvider";
import { PersonalDetailsProvider } from "./PersonalDetailsProvider";

export function MainProvider({ children }) {
  return (
    <PersonalDetailsProvider>
      <CustomDetailsProvider
        initialValue={EDUCATION_EXAMPLE}
        ContextToUse={EducationContext}
        DispatcherToUse={EducationDispatchContext}
      >
        <CustomDetailsProvider
          initialValue={EXPERIENCE_EXAMPLE}
          ContextToUse={ExperienceContext}
          DispatcherToUse={ExperienceDispatchContext}
        >
          <CustomDetailsProvider
            initialValue={OTHERS_EXAMPLE}
            ContextToUse={OthersContext}
            DispatcherToUse={OthersDispatchContext}
          >
            {children}
          </CustomDetailsProvider>
        </CustomDetailsProvider>
      </CustomDetailsProvider>
    </PersonalDetailsProvider>
  );
}
