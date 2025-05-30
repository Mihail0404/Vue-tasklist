import { type UUIDTypes } from "uuid";

export type TaskType = {
  title: string;
  description: string;
  date: Date;
  uuid: UUIDTypes;
};
