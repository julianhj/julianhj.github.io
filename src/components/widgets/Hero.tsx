import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

const coverImage =
  "https://images.unsplash.com/photo-1590767950092-42b8362368da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80";

export default component$(() => {
  return (
    <section class="relative md:-mt-[76px] not-prose">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-auto lg:gap-8">
          <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
            <h1 class="text-5xl md:text-6xl md:leading-2 tracking-tighter mb-4 font-heading dark:text-gray-200">
            Continuous Delivery
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <span class="text-4xl leading-1 text-primary">
              Enabling Excellence
              </span>
              <br/>
              <span class="text-3xl leading-normal text-gray-400">
              A Progressive Software Development Paradigm
              </span>
              <br/><br/>

              <p class="leading-normal mb-6 text-gray-500 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-letter:me-3 first-letter:float-start">
                Innovation is about saving time, money, and resources. It's also about making things better, faster, and more reliable.
                It's not only about creating new things, it's also about doing the same things more efficiently, with the agility to continuously evolve in an environment where customer needs are ever changing.
                <br/><br/>                
                In software development, innovation requires organisations to adopt a progressive software development paradigm, that is focused on continuously delivering value to customers.
                
                This demands an unwavering commitment to 
                {" "}
                <span class=" text-primary">
                  Continuous Delivery
                </span>
                .
                <br/><br/>
                Continuous Delivery is a domain that encompasses a wealth of theoretical discourse. The landscape is abundant with conceptual frameworks and academic discussions describing best practices and implementation approaches. However, despite the wealth of theoretical knowledge, most organizations struggle to transform this knowledge into practical implementation.
                </p>
            </div>
          </div>
          <div class="basis-1/2">
            <Image
              src={coverImage}
              layout="constrained"
              width={493}
              height={616}
              alt="Qwind Hero Image (Cool dog)"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
