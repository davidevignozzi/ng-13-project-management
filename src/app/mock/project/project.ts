import { Activity } from "../activities/activity";

export class Project {
    'id': number;
    'key': string;
    'description': string;
    'lastEdit': string;
    'activities': Activity[];
}