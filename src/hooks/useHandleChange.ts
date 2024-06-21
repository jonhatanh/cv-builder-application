import { Dispatch } from "react";
import { CustomDetailsActions } from "../contexts/CustomDetailsProvider";


export function useHandleChange(dispatch: Dispatch<CustomDetailsActions>) {
  return (property: string, value: string, itemId?: UUID) => {
    if (!itemId) return;
    dispatch({
      type: "changed_input",
      payload: {
        itemId,
        property,
        value,
      }
    });
  }
}