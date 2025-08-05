// menu-item.jsx
import { useState } from 'react';
import MenuList from './menu-list';
import './styles.css';

export default function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li>
      <div 
        className={`menu-item ${hasChildren ? 'has-children' : ''} ${isOpen ? 'open' : ''}`}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {item.label}
      </div>
      {hasChildren && isOpen && <MenuList list={item.children} />}
    </li>
  );
}