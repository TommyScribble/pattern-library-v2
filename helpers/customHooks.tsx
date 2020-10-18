import { useState, useEffect, useRef } from 'react';

const useBreakpoint = (size: number, type = 'min') => {

	const [widthOnLoad, setWidthOnLoad] = useState(false);
	const [widthOnResize, setWidthOnResize] = useState(0);

	useEffect(() => {
		setWidthOnLoad(window.matchMedia(`(${type}-width: ${size}px)`).matches);
		const handleResize = () => setWidthOnResize(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return type === 'min'
		? widthOnLoad || widthOnResize > size
		: widthOnLoad || widthOnResize < size;

};

const isBrowser = typeof window !== `undefined`;

const getScrollPosition = ( {element, useWindow} ) => {
	if (!isBrowser) return { x: 0, y: 0 };
	const target = element ? element.current : document.body;
	const position = target.getBoundingClientRect();
	return useWindow
		? { x: window.scrollX, y: window.scrollY }
		: { x: position.left, y: position.top };
};

const useScrollPosition = (
	effect: ({}) => void,
	dependencies?: any,
	element?: HTMLElement,
	useWindow?: any,
	wait?: number,
) => {
	const position = useRef(getScrollPosition({ element, useWindow }));
	let throttleTimeout = null;
	const callBack = () => {
		const currPos = getScrollPosition({ element, useWindow });
		effect({ prevPos: position.current, currPos });
		position.current = currPos;
		throttleTimeout = null;
	};
	useEffect(() => {
		const handleScroll = () => {
			if (wait) {
				if (throttleTimeout === null) {
					throttleTimeout = setTimeout(callBack, wait);
				}
			} else {
				callBack();
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, dependencies);
};

export { useBreakpoint, useScrollPosition };
