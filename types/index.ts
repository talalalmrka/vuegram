export type AccordionMode = "single" | "multiple";
export interface AccordionContext {
  openItems: Set<string>;
  toggleItem(id: string): void;
  isItemOpen(id: string): boolean;
  mode: AccordionMode;
  registerHead(id: string, el: HTMLElement): void;
  unregisterHead(id: string): void;
  focusNext(id: string): void;
  focusPrev(id: string): void;
}

export const AccordionContextKey = Symbol("AccordionContext");
export const ItemIdKey = Symbol("AccordionItemId");

export type LoaderType =
  | "default"
  | "dotsBounce"
  | "dotsFade"
  | "dotsMove"
  | "dotsRotate"
  | "dotsScale";

export const loaderTypes: LoaderType[] = [
  "default",
  "dotsBounce",
  "dotsFade",
  "dotsMove",
  "dotsRotate",
  "dotsScale",
];
