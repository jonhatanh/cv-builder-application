import { useContext } from "react";
import { PersonalDetailsContext, PersonalDetailsDispatchContext, SocialMediaContext, SocialMediaContextDispatchContext } from "../../contexts/PersonalDetailsProvider";

export function usePersonalDetails() {
  return useContext(PersonalDetailsContext);
}

export function usePersonalDetailsDispatch() {
  return useContext(PersonalDetailsDispatchContext);
}
export function useSocialMedia() {
  return useContext(SocialMediaContext);
}

export function useSocialMediaDispatch() {
  return useContext(SocialMediaContextDispatchContext);
}
