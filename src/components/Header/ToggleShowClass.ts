// UserProfileDropDown.ts
export const toggleClass = (
  element: HTMLElement | null,
  toggleClass: string
): void => {
  if (element) {
    const classes = element.className.split(' ');
    if (classes.includes(toggleClass)) {
      element.className = classes.filter(cls => cls !== toggleClass).join(' ');
    } else {
      element.className = [...classes, toggleClass].join(' ');
    }
  }
};

export const removeClass = (
  element: HTMLElement | null,
  removeClass: string
): void => {
  if (element) {
    const classes = element.className.split(' ');
    element.className = classes.filter(cls => cls !== removeClass).join(' ');
  }
};

export const handleClickOutside = (
  event: MouseEvent,
  refs: React.RefObject<HTMLElement>[],
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  elementsToRemoveClass: React.RefObject<HTMLElement>[],
  classNameToRemove: string
) => {
  if (refs.every(ref => ref.current && !ref.current.contains(event.target as Node))) {
    setShow(false);
    elementsToRemoveClass.forEach(element => removeClass(element.current, classNameToRemove));
  }
};

export const preventEventPropagation = (event: React.MouseEvent) => {
  event.stopPropagation();
};