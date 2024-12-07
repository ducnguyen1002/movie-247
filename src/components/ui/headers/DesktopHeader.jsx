
import { NAV_ITEMS } from '@/lib/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const DesktopHeader = () => {
  return (
    <header className="hidden lg:block w-full fixed top-0 left-0 z-[999]">
      <div className="container mx-auto px-10 py-2 flex justify-between">
        <DesktopNav />
        <SearchBox />
      </div>
    </header>
  )
}

const DesktopNav = () => {
  const activeItemRef = useRef(null);
  const [activeItem, setActiveItem] = useState(NAV_ITEMS[0]);
  const [activePosition, setActivePosition] = useState({ left: 0, width: 0, top: -100 });
  const router = useRouter();
  const segment = router.query.category;

  const handleItemClick = (item, ref) => {
    setActiveItem(item);
    activeItemRef.current = ref;
    router.push(item.link);
  };

  const calculateActivePosition = (el) => {
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setActivePosition({ left: offsetLeft, width: offsetWidth, top: 0 });
    }
  };

  useEffect(() => {
    if (segment && segment !== "/") {
      const matchedItem = NAV_ITEMS.find(item => item.link.includes(segment));
      setActiveItem(matchedItem || NAV_ITEMS[0]);
    } else {
      setActiveItem(NAV_ITEMS[0]);
    }
  }, [segment]);

  useEffect(() => {
    calculateActivePosition(activeItemRef.current);
  }, [activeItem, segment]);

  return (
    <div className="relative">
      <div
        className="absolute z-10 border-[2px] border-slate-200 bg-slate-50/10 h-full rounded-3xl transition-all duration-200"
        style={{
          left: `${activePosition.left - 12}px`,
          top: `${activePosition.top}px`,
          width: `${activePosition.width + 24}px`,
        }}
      ></div>

      <div className="glass-effect flex gap-6 px-4 py-2 rounded-3xl relative z-0">
        {NAV_ITEMS.map(item => (
          <Link
            key={item.link}
            href={item.link}
            className={`nav-item ${item.link === activeItem.link ? "active text-white" : "text-gray-400"}`}
            onClick={(e) => {
              e.preventDefault();
              handleItemClick(item, e.currentTarget);
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const containerRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/tim-kiem?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleBlur = (e) => {
    if (!containerRef.current.contains(e.relatedTarget)) {
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      ref={containerRef}
      className={`w-fit flex gap-2 items-center glass-effect rounded-full pl-4 pr-2 py-1 shadow-md transition-all`}
      onBlur={handleBlur}
    >
      <FiSearch
        className="text-gray-200 text-lg cursor-pointer"
      />
      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`outline-none text-gray-200 bg-transparent transition-all duration-1000`}
        autoFocus
      />
    </form>
  );
};


export default DesktopHeader
