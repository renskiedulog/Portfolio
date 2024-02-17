import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className="pt-[4rem] w-full min-h-screen">
      <div className="text-center py-3 header opacity-0">
        <h1 className="text-3xl font-semibold text-slate-700">Contact</h1>
        <p className="py-1 text-sm opacity-80">Need My Help?</p>
      </div>
      <div className="flex justify-center flex-col md:flex-row gap-5 my-5">
        <div className="h-full w-full opacity-0">
          <h1 className="text-center md:text-xl font-semibold text-slate-700">
            Talk to me
          </h1>
          <div className="flex flex-col gap-2 bg-white min-h-40 w-3/4 mx-auto rounded-md px-3 py-2 shadow mt-5 justify-center items-center">
            <i className="fa-regular fa-envelope text-2xl"></i>
            <h2 className="font-medium">Email</h2>
            <p className="opacity-70">renrendulog@gmail.com</p>
            <a
              href="#"
              className="opacity-50 flex gap-2 items-center group hover:opacity-70"
            >
              <p>Write Me</p>
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-2 transition"></i>
            </a>
          </div>
          <div className="flex flex-col gap-2 bg-white min-h-40 w-3/4 mx-auto rounded-md px-3 py-2 shadow mt-5 justify-center items-center">
            <i className="fa-regular fa-envelope text-2xl"></i>
            <h2 className="font-medium">Email</h2>
            <p className="opacity-70">renrendulog@gmail.com</p>
            <a
              href="#"
              className="opacity-50 flex gap-2 items-center group hover:opacity-70"
            >
              <p>Write Me</p>
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-2 transition"></i>
            </a>
          </div>
          <div className="flex flex-col gap-2 bg-white min-h-40 w-3/4 mx-auto rounded-md px-3 py-2 shadow mt-5 justify-center items-center">
            <i className="fa-regular fa-envelope text-2xl"></i>
            <h2 className="font-medium">Email</h2>
            <p className="opacity-70">renrendulog@gmail.com</p>
            <a
              href="#"
              className="opacity-50 flex gap-2 items-center group hover:opacity-70"
            >
              <p>Write Me</p>
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-2 transition"></i>
            </a>
          </div>
        </div>
        <div className="h-full w-full opacity-0">
          <h1 className="text-center md:text-xl font-semibold text-slate-700">
            Write me an email
          </h1>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
