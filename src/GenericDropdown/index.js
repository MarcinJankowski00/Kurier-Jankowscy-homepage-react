import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    DropdownHeader,
    DropdownItem,
    DropdownWrapper,
    PortalDropdownListStyled,
    Selected,
    Span
} from './styled';

function PortalDropdownList({ targetRef, dropdownRef, isOpen, children }) {
    const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });

    useEffect(() => {
        if (targetRef.current && isOpen) {
            const rect = targetRef.current.getBoundingClientRect();
            setCoords({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width,
            });
        }
    }, [isOpen, targetRef]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <PortalDropdownListStyled
            ref={dropdownRef}
            style={{
                top: coords.top,
                left: coords.left,
                minWidth: coords.width,
            }}
        >
            {children}
        </PortalDropdownListStyled>,
        document.body
    );
}

export default function GenericDropdown({
    items,
    selected,
    onSelect,
    getLabel = (item) => item.name ?? item.toString(),
    getRightContent,
    getTooltip,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    const handleSelect = (item) => {
        onSelect(item);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const isInsideWrapper = wrapperRef.current?.contains(event.target);
            const isInsideDropdown = dropdownRef.current?.contains(event.target);
            if (!isInsideWrapper && !isInsideDropdown) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <DropdownWrapper ref={wrapperRef}>
            <DropdownHeader onClick={toggleDropdown}>
                <Selected>{getLabel(selected)}</Selected>
                <span>▼</span>
            </DropdownHeader>

            <PortalDropdownList
                targetRef={wrapperRef}
                dropdownRef={dropdownRef}
                isOpen={isOpen}
            >
                {items.map((item, index) => (
                    <DropdownItem
                        key={index}
                        onClick={() => handleSelect(item)}
                        title={getTooltip ? getTooltip(item) : ''}
                    >
                        <Span>{getLabel(item)}</Span>
                        {getRightContent && <span>{getRightContent(item)}</span>}
                    </DropdownItem>
                ))}
            </PortalDropdownList>
        </DropdownWrapper>
    );
}
