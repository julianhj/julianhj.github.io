import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

import IconStar from "~/components/icons/IconStar";
import IconArrowRight from "~/components/icons/IconArrowRight";

const sideImg =
  "https://images.unsplash.com/photo-1583195648430-18b2681307e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80";

export default component$(() => {
  const stepsData = {
    title: "The key Steps",
    items: [
      {
        title: "Continuous Design",
        description:
          "Emphasizes the ongoing nature of design activities throughout the development process. This involves refining and evolving the design based on changing requirements, feedback, and emerging insights. Continuous design encourages adaptability and responsiveness to evolving project needs.",
        icon: IconArrowRight,
      },
      {
        title: "Continuous Development",
        description:
          "Promotes an ongoing development process where coding activities are continuous rather than divided into distinct phases. This aligns with agile methodologies, emphasizing iterative development, regular releases, and responsiveness to changing priorities.",
        icon: IconArrowRight,
      },
      {
        title: "Continuous Integration",
        description:
          "Involves the frequent integration of code changes into a shared repository. This practice helps identify and address integration issues early in the development process, promoting collaboration among team members and ensuring a stable codebase.",
        icon: IconArrowRight,
      },
      {
        title: "Continuous Deployment",
        description:
          "Focuses on automating the deployment process to enable the rapid and consistent release of software changes into production. Continuous deployment minimizes manual intervention, reducing the risk of errors and accelerating the delivery of new features.",
        icon: IconArrowRight,
      },
      {
        title: "Continuous Release",
        description:
          "Extends the continuous deployment concept, emphasizing the continuous release of software changes to end-users. This involves making new features and improvements available to users in a seamless and regular manner, fostering a continuous delivery pipeline.",
        icon: IconArrowRight,
      },
      {
        title: "Continuous Feedback",
        description:
          "Stresses the importance of gathering feedback continuously from users, stakeholders, and automated monitoring systems. Feedback loops help teams assess the impact of changes, identify areas for improvement, and make informed decisions for future iterations.",
        icon: IconArrowRight,
      },
      {
        title: "Repeat",
        description:
          "After obtaining feedback, teams can iterate on the design, development, integration, and deployment processes to continuously enhance the software product. This repetition supports a culture of continuous improvement.",
        icon: IconArrowRight,
      },
    ],
    image: {
      src: sideImg,
      alt: "Steps image",
    },
  };
  const { title, items, image } = stepsData;

  return (
    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="row-gap-10 grid gap-6 md:grid-cols-2">
        <div class="mb-4 md:mb-0 md:py-4 md:pr-16">
          {title && <h2 class="text-4xl md:text-4xl leading-3 sm:whitespace-nowrap text-primary mb-8">{title}</h2>}
          
          {Array.isArray(items) &&
            items.length &&
            items.map(({ title, description, icon: Icon }, index) => (
              <div key={`item-steps-${index}`} class="flex">
                <div class="mr-4 flex flex-col items-center">
                  <div>
                    {index !== items.length - 1 ? (
                      <div class="flex bg-[#039de1] h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                        {typeof Icon !== "undefined" ? (
                          //<Icon class="h-6 w-6 text-white" />
                          <p class="text-white font-extrabold">{`${index}`}</p>
                          
                        ) : (
                          <IconStar class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                        )}
                      </div>
                    ) : (
                      <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                        {typeof Icon !== "undefined" ? (
                          <Icon class="h-6 w-60" />
                        ) : (
                          <IconStar class="h-6 w-6" />
                        )}
                      </div>
                    )}
                  </div>
                  {index !== items.length - 1 && <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>}
                </div>
                <div class={`pt-1 hover:text-primary ${index !== items.length - 1 ? "pb-8" : ""}`}>
                {title && <p class="mb-2 text-xl font-bold">{title}</p>}
                {description && <p class="">{description}</p>}
                </div>
              </div>
            ))}
        </div>
        <div class="relative">
          {typeof image !== "undefined" && (
            <Image
              layout="constrained"
              src={image.src}
              width={532}
              height={704}
              alt={image.alt}
              class="inset-0 w-full rounded-md bg-gray-500 object-cover object-top shadow-lg dark:bg-slate-700 md:absolute md:h-full"
              breakpoints={[320, 480, 640, 1024]}
            />
          )}
        </div>
      </div>
    </section>
  );
});
