import { Activity } from "../activities/activity";

export class Project {
    'id': number;
    'key': string;
    'description': string;
    'lastEdit': Date;
    'activities': Activity[];
}