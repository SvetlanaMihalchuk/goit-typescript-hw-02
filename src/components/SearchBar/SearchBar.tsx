import React, { ChangeEvent, FormEvent, FunctionComponent, useRef, useState } from "react"
import css from "./SearchBar.module.css"
import { IoMdSearch } from "react-icons/io";
import toast from "react-hot-toast";

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({onSubmit}) => {
    const [query, setQuery] = useState<string>("")
    const formRef = useRef<HTMLFormElement | null>(null);
    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.currentTarget.value);
  };
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim() === ""){
            toast.error("The field must not be empty. Please enter a search query!", {
                position: "top-center",
                duration: 4000,
            });
            return;
        }
        onSubmit(query);
        if (formRef.current) {
            formRef.current.reset()
        }
        setQuery("");
    }
  return (
      <header className={css.header}>
          <form className={css.form} onSubmit={handleSubmit} ref={formRef}> 
                <input className={css.input}
                onChange={handleChange}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
              <button type="submit">
                  <IoMdSearch className={css.icon} size="20"/>
              </button>
          </form>
      </header>
  )
}

export default SearchBar