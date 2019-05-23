import * as constants from "./constants";

export const genInputFocusedAction = (focused) => {
    return {
        type: constants.ACTION_INPUT_FOCUSED,
        focused
    }
}