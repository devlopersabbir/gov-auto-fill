export function setValue(
  element: HTMLInputElement | HTMLSelectElement,
  value: any
): void {
  let lastValue: string = element.value;
  element.value = value;
  let event: Event = new Event("input", { bubbles: true });
  // React 15
  (event as any).simulated = true;
  // React 16
  let tracker = (element as any)._valueTracker;
  if (tracker) {
    tracker.setValue(lastValue);
  }
  element.dispatchEvent(event);
}
