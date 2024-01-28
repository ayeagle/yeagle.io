import { Property } from "csstype";



export type vcInfo = {
  index: number;
  title: string;
  fade_start_position: number;
  fade_modifier: number;
  position: number;
};

export type MainProjectDetails = {
  id: number;
  name: string;
  description: string;
  code: Array<string>;
  orientation: string;
  image_link: string;
  website: string;
  github: string;
};

export type OtherProjectDetails = {
  id: number;
  name: string;
  description: string;
  code: Array<string>;
  website: string;
  github: string;
};

export type JobDetailsItem = [string, number];

export type JobSectionDetails = {
  id: number;
  company: string;
  company_url: string;
  role: string;
  tenure: string;
  details: Array<JobDetailsItem>;
  logo_pic: string;
  hard_skills: Array<JobDetailsItem>;
  soft_skills: Array<JobDetailsItem>;
  top_move_perc: string;
  additional_bottom_padding: string;
};

export type QuoteItem = {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  size: string;
  pic: string;
  position: number;
};

export type SocialProps = {
  size: string;
  loc: Property.TextAlign;
  orientation: Property.FlexDirection;
};
