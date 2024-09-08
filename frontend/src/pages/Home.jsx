import React, { useEffect, useState } from "react";
import api from "../api";
import Note from "../components/Note";
import Nav from "../components/Nav";

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
        if (res.status === 204) { 
          alert("Note Deleted");
          getNotes();
        }
        else alert("Failed to delete");
      })
      .catch((err) => alert(err));
    
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { title, content })
      .then((res) => {
        if (res.status === 201) {
          alert("Note Created");
          setTitle("");
          setContent("");
          
        } else alert("Faild to create Note");
      })
      .catch((err) => alert(err));
    getNotes();
  };

  return (
    <div className="bg">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        <Nav />
        {/* <!-- ===== Sidebar Start ===== --> */}
        <aside className="absolute top-0 left-0  z-40 flex h-screen w-80 flex-col overflow-y-hidde duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 bg-gray-900">
          <h1 className=" pt-3 ps-5 font-bold text-xl text-white">Notes App</h1>
          <div className="flex items-center w-ful p-5">
            <form className="w-full mx-auto" onSubmit={createNote}>
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
                  value={content}
                  placeholder="Content here..."

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
        </aside>
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="px-3 py-2 text-gay-900">
                  <h3 className="text-amber-500 text-3xl font-semibold mb-5 mt-14">
                    Notes{" "}
                    <small className="text-xl text-gray-500">
                      {notes.length}
                    </small>
                  </h3>
                  {notes &&
                    notes.map((note) => (
                      <Note note={note} key={note.id} onDelete={deleteNote} />
                    ))}
                </div>
              </div>
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default Home;
