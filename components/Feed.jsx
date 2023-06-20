"use client"

import { useState, useEffect } from "react";
import NoteCard from "./NoteCard";


const Feed = () => {

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [allNotes, setAllNotes] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt",{ cache: 'no-store' });
    const data = await response.json();

    setAllNotes(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);


  const NoteCardList = ({ data, handleTagClick }) => {

    return (
      <div className="mt-16 note_layout">
        {
        data.map((note) => (
          <NoteCard
            key={note._id}
            note={note}
            handleTagClick={handleTagClick}
            />
        ))}
      </div>
    )
  };


  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allNotes.filter(
      (item) =>
        regex.test(item.creator.username)  ||
        regex.test(item.note)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };


  const handleSearchChange = (e) => {
 
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };


  return (
    <section className="feed">
       <form  className="relative w-full flex-center">
        <input type="text"
         placeholder="Search for notes"
         value={searchText}
         onChange={handleSearchChange}
         required
         className="search_input peer" />
       </form>

        {/* All Notes */}
        {searchText ? (
          <NoteCardList data={searchedResults} handleTagClick={handleTagClick} />
        ): (
          <NoteCardList data={allNotes} handleTagClick={handleTagClick} />
        )}


    </section>
  )
}

export default Feed