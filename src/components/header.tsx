import React, { useContext, useState, useEffect } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Search } from "lucide-react";
import { Label } from "@/components/ui/label.tsx";
import { GlobalContext } from "@/contexts/globalContext.tsx";

const AppHeader = () => {
    const { doctors, setSearchQuery } = useContext(GlobalContext);
    const [inputValue, setInputValue] = useState<string>("");
    const [suggestions, setSuggestions] = useState<{ name: string; photo: string }[]>([]);
    const [debouncedValue, setDebouncedValue] = useState<string>("");

    // Debounce input value
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 300); // 300ms debounce delay

        return () => clearTimeout(handler);
    }, [inputValue]);

    // Update suggestions based on debounced value
    useEffect(() => {
        if (debouncedValue.trim() === "") {
            setSuggestions([]);
            return;
        }

        const matches = doctors
            .filter((doctor) => doctor.name.toLowerCase().includes(debouncedValue.toLowerCase()))
            .slice(0, 3)
            .map((doctor) => ({ name: doctor.name, photo: doctor.photo }));

        setSuggestions(matches);
    }, [debouncedValue, doctors]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSuggestionClick = (doctor: { name: string; photo: string }) => {
        setInputValue(doctor.name);
        setSearchQuery(doctor.name); // Update search query
        setSuggestions([]); // Clear suggestions
    };

    return (
        <div className="max-h-20 bg-[#005eac] h-full py-4">
            <div className="relative max-w-7xl mx-auto flex items-center justify-between">
                <div className="relative w-full mx-6">
                    <Input
                        id="search"
                        className="bg-white mx-auto focus-visible:border-none focus-visible:ring-none rounded-lg"
                        placeholder="Search Symptoms, Doctors, Specialists, Clinics"
                        data-testid="autocomplete-input"
                        onChange={handleInputChange}
                        value={inputValue}
                    />
                    {suggestions.length > 0 && (
                        <ul className="absolute bg-white border rounded-lg shadow-md mt-1 w-full z-10">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    data-testid="suggestion-item"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    <img
                                        src={suggestion.photo}
                                        alt={suggestion.name}
                                        className="w-8 h-8 rounded-full mr-3"
                                    />
                                    {suggestion.name}
                                </li>
                            ))}
                        </ul>
                    )}
                    <Label htmlFor="search">
                        <Search className="absolute top-2 right-4" size={18} />
                    </Label>
                </div>
            </div>
        </div>
    );
};

export default AppHeader;