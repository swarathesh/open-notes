import Link from "next/link";


const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col"> 
       <h1 className="head_text text-left">
         <span className="green_gradient">{type} Note</span>
       </h1>
       
       <form onSubmit={handleSubmit} className="mt-9 w-full max-w-3xl flex flex-col gap-7 glassmorphism">
          <label>
            <span className="text-base font-satoshi font-semibold text-black-600">Enter Notes</span>
          </label>

          <textarea className="form_textarea bg-lime-50"
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          placeholder="Write your notes here to summerize"
          required
          />

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href='/' className="text-grey-500 text-sm">
            cancel
          </Link>

          <button
          type="submit"
          disabled={submitting}
          className="px-5 py-1 text-xl bg-lime-200 rounded-full text-black">
              {submitting ? `${type}ing...` : type}
          </button>
        
        </div>
       </form>
    </section>
  )
}

export default Form