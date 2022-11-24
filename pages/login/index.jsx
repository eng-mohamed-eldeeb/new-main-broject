const Index = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <div className="w-1/2 h-4/5 rounded-3xl border flex justify-center items-center border-black">
        <form className=" w-11/12 h-5/6">
          <div className="flex flex-col w-2/5">
            <label htmlFor="e-mail" className="">mail</label>
            <input type="email" className="p-2 rounded-xl" />
          </div>
          <div className="flex flex-col w-2/5">
            <label htmlFor="password" className="">password</label>
            <input type="password" className="p-2 rounded-xl" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Index;
