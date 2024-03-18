import { component$ } from "@builder.io/qwik";

interface Post {
  title?: string;
  excerpt?: string;
  slug: string;
}

interface Props {
  posts: Array<Post>;
  childSlug: { value: string };
}

export default component$<Props>(({ posts = [], childSlug }) => {
  //const { posts = [], child } = props;

  return (
    <div>
      {posts.map(({ title, excerpt, slug }, index) => (
        <div key={`item-steps-${index}`} class={`flex `}>
          <div class="mr-4 flex flex-col items-center">
            <div>
              {index !== posts.length - 1 ? (
                <div class="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#039de1]">
                  <p class="font-extrabold text-white">{`${index + 1}`}</p>
                </div>
              ) : (
                <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-none bg-[#039de1]">
                  <p class="font-extrabold text-white">1</p>
                </div>
              )}
            </div>
            {index !== posts.length - 1 && (
              <div class="h-full w-1 bg-[#039de1] "></div>
            )}
          </div>
          <div
            class={`pt-1 hover:text-primary ${index !== posts.length - 1 ? "pb-8" : ""}`}
          >
            <a
              onClick$={() => {
                childSlug.value = slug;
              }}
              class="underline decoration-dotted decoration-1 underline-offset-4 transition duration-200 ease-in"
              href={`#`}
            >
              {title && <p class="mb-2 text-xl font-bold">{title}</p>}
              {excerpt && <p class="">{excerpt}</p>}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
});
