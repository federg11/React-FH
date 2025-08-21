import { useEffect, useState } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;
}


export const SearchBar = ({ placeholder = 'Buscar', onQuery }: Props) => {

    const [query, setQuery] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onQuery(query)
        }, 700);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [query, onQuery])
    

    const handleSearch = () => {
        onQuery(query);
        setQuery('');
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            handleSearch();
        }
    }

    return (
        <div className="search-container">
            <input type="text"
                placeholder={placeholder}
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}
