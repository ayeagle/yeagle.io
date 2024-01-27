export enum NavScrollTarget {
    RESUME = "RESUME",
    PROJECTS = "PROJECTS",
    CONTACT = "CONTACT",
    TOP = "TOP",
  }
  
  export type PageNavItem = {
    name: string;
    class_name: string;
    padding_value: string;
    scroll_target: NavScrollTarget;
  };