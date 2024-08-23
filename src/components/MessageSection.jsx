import love from "../images/love.svg";

const MessageSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-400 via-black-500 to-red-500 text-slate-100 p-10 text-center min-h-screen flex flex-col justify-between">
      <h2 className="text-4xl font-extrabold mb-4">
        Wishes for You: A Year Filled with{" "}
        <span className="text-purple-800">Joy</span> and <span className="text-purple-800">Blessings</span>
      </h2>
      <img src={`${love}`} alt="Love" />
      <p className="font-medium text-justify">
        May your 22nd year be filled with endless blessings, boundless joy, and
        dreams that come true. Here's to your growth, your strength, and the
        incredible journey ahead. May every step you take be guided by wisdom,
        and may love and happiness follow you wherever you go. Cheers to your
        bright future, my love!
      </p>
    </section>
  );
};

export default MessageSection;
