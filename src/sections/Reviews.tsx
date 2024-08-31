import Haruka from "../assets/carousel/haruka.png";
import Elena from "../assets/carousel/elena.png";
import Thomas from "../assets/carousel/thomas.png";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Carousel from "../common/Carousel";

function Reviews() {
  const slides = [
    {
      src: Elena,
      text: '"Using Nexus has streamlined my financial transactions like never before. Highly recommended for anyone looking to simplify their finances!"',
      name: "Elena Rodriguez",
      country: "Spain",
    },
    {
      src: Haruka,
      text: '"Nexus has helped me send and receive money with little to no complications. It´s what everyone who wants to be on top of their money needs!"',
      name: "Haruka Sato",
      country: "Japan",
    },
    {
      src: Thomas,
      text: '"Nexus has been a game changer for my daily financial dealings. It allows for quick and secure money transfers, which saves me a lot of time and effort."',
      name: "Tomas Morgan",
      country: "USA",
    },
  ];

  return (
    <section
      id="reviews"
      className="flex max-w-7xl flex-col items-center justify-between px-8 py-20 lg:m-auto lg:flex-row lg:px-12"
    >
      <article className="mb-10 flex flex-col items-center justify-center lg:w-1/2 lg:items-start">
        <h2 className="mb-4 max-w-[16ch] text-center text-4xl font-semibold text-gray-800 lg:w-full lg:text-left">
          Join other thousands of people with Nexus
        </h2>
        <StoreLinks type={BtnTypes.Standard} />
      </article>
      <Carousel slides={slides} />
    </section>
  );
}

export default Reviews;
