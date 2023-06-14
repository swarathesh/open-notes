import Feed from "@components/Feed";

const Home = () => (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
      
        <span className='green_gradient text-center'>Open Notes</span>
      </h1>
      <p className='desc text-center'>
        Open Notes is an open-source note-taking tool for modern world to discover, create and share creative notes.
      </p>
       <Feed />
    </section>
  );
  

export default Home;