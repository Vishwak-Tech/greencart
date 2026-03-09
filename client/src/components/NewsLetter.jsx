import toast from "react-hot-toast";

export default function Newsletter() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    console.log(email);

    toast.success("Subscribed successfully!");
  };

  return (
    <section className="flex flex-col items-center justify-center mt-24 pb-14">

      <div className="flex items-center gap-2 text-sm text-primary bg-indigo-50 rounded-full px-3 py-1">
        <span>Simple Process</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mt-4">
        Get started for free today
      </h1>

      <p className="max-w-lg text-center text-slate-500 mt-6">
        Join thousands of users who are already buying amazing things,
        completely free to start.
      </p>

      <form
        onSubmit={handleSubmit}
        className="relative flex items-center rounded-md border border-slate-200 mt-6 text-sm max-w-md w-full"
      >

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="focus:outline-none pl-10 py-5 bg-transparent w-full"
          required
        />

        <button
          type="submit"
          className="shrink-0 mr-2 px-6 py-3 text-sm bg-primary hover:bg-primary-dull rounded-md active:scale-95 transition duration-300 text-white"
        >
          Subscribe now
        </button>

      </form>

    </section>
  );
}