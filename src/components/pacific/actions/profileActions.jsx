import {Types} from "../constants/types";

export const profileAction = {
    dashboard: (user) => ({type:Types.DASHBOARD, payload: {user}}),
    job_applications: (user) => ({type:Types.JOB_APPLICATIONS, payload: user}),
    job_post: (user) => ({type:Types.JOB_POST, payload: user})
}