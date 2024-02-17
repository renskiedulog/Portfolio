"use client";
const Form = () => {
  return (
    <form>
      <div className="my-5 outline outline-1 w-3/4 mx-auto rounded-md outline-slate-400 relative opacity-70 focus-within:opacity-100">
        <input
          className="w-full px-4 py-3 bg-transparent outline-none"
          type="text"
          placeholder="Insert your name"
          id="form-name"
        />
        <label
          htmlFor="form-name"
          className="text-slate-600 bg-[#f9f9f9] absolute z-10 top-[-12px] px-1 left-3 text-sm"
        >
          Name
        </label>
      </div>
      <div className="my-10 outline outline-1 w-3/4 mx-auto rounded-md outline-slate-400 relative opacity-70 focus-within:opacity-100">
        <input
          className="w-full px-4 py-3 bg-transparent outline-none"
          type="text"
          placeholder="Insert your email"
          id="form-email"
        />
        <label
          htmlFor="form-email"
          className="text-slate-600 bg-[#f9f9f9] absolute z-10 top-[-12px] px-1 left-3 text-sm"
        >
          Email
        </label>
      </div>
      <div className="my-10 outline outline-1 w-3/4 mx-auto rounded-md outline-slate-400 relative opacity-70 focus-within:opacity-100">
        <textarea
          className="w-full px-4 py-3 bg-transparent outline-none resize-none min-h-40"
          type="text"
          placeholder="Insert your email"
          id="form-email"
        />
        <label
          htmlFor="form-email"
          className="text-slate-600 bg-[#f9f9f9] absolute z-10 top-[-12px] px-1 left-3 text-sm"
        >
          Project
        </label>
      </div>
    </form>
  );
};

export default Form;
