import { RefObject, useCallback, useEffect, useState } from 'react';

const usePosition = (ref: RefObject<HTMLDivElement>) => {
	const [prevElement, setPrevElement] = useState<Element | null>(null);
	const [nextElement, setNextElement] = useState<Element | null>(null);

	const getPrevElement = (list: Element[]) => {
		const sibling = list[0].previousElementSibling;

		if (sibling instanceof HTMLElement) {
			return sibling;
		}

		return null;
	};

	const getNextElement = (list: Element[]) => {
		const sibling = list[list.length - 1].nextElementSibling;

		if (sibling instanceof HTMLElement) {
			return sibling;
		}

		return null;
	};

	const scrollToElement = useCallback(
		(element) => {
			if (ref) {
				const currentNode: HTMLDivElement = ref.current!;

				if (!currentNode || !element) return;

				let newScrollPosition;

				newScrollPosition =
					element.offsetLeft +
					element.getBoundingClientRect().width / 2 -
					currentNode.getBoundingClientRect().width / 2;

				currentNode.scroll({
					left: newScrollPosition,
					behavior: 'smooth',
				});
			}
		},
		[ref]
	);

	const scrollRight = useCallback(
		() => scrollToElement(nextElement),
		[scrollToElement, nextElement]
	);
	const scrollLeft = useCallback(
		() => scrollToElement(prevElement),
		[scrollToElement, prevElement]
	);

	useEffect(() => {
		if (ref) {
			const element: HTMLDivElement = ref.current!;

			const update = () => {
				//get Boundaries of the container
				const rect = element.getBoundingClientRect();
				const visibleElements = Array.from(element.children).filter((child) => {
					const childRect = child.getBoundingClientRect();
					return Math.abs(rect.left - childRect.left) < 200 || Math.abs(rect.right - childRect.right) < 200;
				});
				if (visibleElements.length > 0) {
					setPrevElement(getPrevElement(visibleElements));
					setNextElement(getNextElement(visibleElements));
				}
			};

			update();
			element.addEventListener('scroll', update, true);

			return () => {
				element.removeEventListener('scroll', update, true);
			};
		}
	}, [ref]);

	return {
		hasItemsOnLeft: prevElement !== null,
		hasItemsOnRight: nextElement !== null,
		scrollLeft,
		scrollRight,
	};
};

export default usePosition;
