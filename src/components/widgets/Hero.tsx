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
            <h1 class="text-5xl md:text-6xl leading-1 tracking-tighter mb-4 font-heading dark:text-gray-200">
              Enabling Excellence 
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <span class="text-4xl md:text-4xl leading-3 sm:whitespace-nowrap text-primary">
                A Progressive Software Development Paradigm
              </span>
              <p class="text-xl text-muted mb-6 dark:text-slate-300">
                <br/>
                Embracing a progressive software development paradigm demands an unwavering commitment to the principles of
                {" "}
                <span class=" text-primary">
                  Continuous Delivery
                </span>
                .
                <br/><br/>
                <span class=" text-primary">
                  Continuous Delivery
                  {" "}
                </span>
                is a domain that encompasses a wealth of theoretical discourse. The landscape is abundant with conceptual frameworks and academic discussions surrounding best practices. However, despite the wealth of theoretical knowledge, many individuals and organizations struggle to transform this knowledge into practical implementation.
                <br/><br/>
                The challenge often arises due to the tendency to treat Continuous Delivery as an ancillary consideration, frequently becoming a post-development endeavour.
                We must transition towards a paradigm where Applications and Continuous Delivery are interdependent, coexisting harmoniously. This suggests the one should not exist without the other, and should be built concurrently. 
                <br/><br/>
                Living organisms possess the ability to sense changes in their environment and promptly adapt to them. This agility is essential for their sustained health and overall resilience. Similarly, Applications should also be seen as dynamic entities living within an interconnected ecosystem, constantly adapting to the ever-changing environment. 
                They need to constantly undergo an evolutionary process, ensuring their ongoing suitability and effectiveness.
                This approach helps us build systems that not only meet their intended purpose but also exhibit resilience and adaptability in the face of constantly evolving requirements.
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
