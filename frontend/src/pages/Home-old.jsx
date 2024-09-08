import React, { useEffect, useState } from "react";
import api from "../api";
import Note from "../components/Note";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note Deleted");
        else alert("Failed to delete");
      })
      .catch((err) => alert(err));
    getNotes();
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { title, content })
      .then((res) => {
        if (res.status === 201) alert("Note Created");
        else alert("Faild to create Note");
      })
      .catch((err) => alert(err));
    getNotes();
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center w-100 px-6 py-8 mx-auto h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"> */}
          Notes
        </a>

        <div className="div">
          <h1>Notes</h1>
          {notes && notes.map((note) => (
            <Note note={note} key={note.id} onDelete={deleteNote}/>
            ))}
        </div>

        <div>
          <h2>Creatre Note</h2>
          <form className="max-w-sm mx-auto" onSubmit={createNote}>
            <div className="mb-5">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Content
              </label>
              <textarea
                onChange={(e) => setContent(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              ></textarea>

            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Note
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Home;



<div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-white border-b border-gray-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="shrink-0 flex items-center">
                <a href="">Home</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3/12 gap-2">

          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-amber-500 text-2xl font-semibold">
                Pending Tasks
              </h3>
              <p className="text-xl mt-4">sn ajnscjnn sjc jas</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-amber-500 text-2xl font-semibold">
                Pending Tasks
              </h3>
              <p className="text-xl mt-4">sn ajnscjnn sjc jas</p>
            </div>
          </div>


        </div>
      </div>
    </div>