import { Types } from "../constants/types";

const initState = {
    dashboard: {},
    jobapplication: [],
    jobpost: [],
}

const profileReducer = (state=initState, action) => {
    switch (action.type) {
        case Types.DASHBOARD:
            console.log("Dashboard details: ", action.payload)
            return {
                ...state,
                dashboard: action.payload,
            }
        case Types.JOB_DESCRIPTION:
            console.log("Job description details", action.payload)
            return {
                ...state,
                jobapplication: action.payload,
            }
            break;
        case Types.JOB_POST:
            console.log("Job post details", action.payload)
            return {
                ...state,
                jobpost: action.payload,
            }
        default:
            return state
    }
}

export default profileReducer