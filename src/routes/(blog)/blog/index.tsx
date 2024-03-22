import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import type { DocumentHead } from "@builder.io/qwik-city";


import type { Post } from "~/types";
import { fetchPosts } from "~/utils/posts";
import { SITE } from "~/config.mjs";
import Posts from "~/components/widgets/Posts";

export const head: DocumentHead = {
  title: "Key Principals of Progressive Software Development",
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};

export default component$(() => {
  /*const childSlug = useStore({
    posts: (childSlug: string) => {
      const childPosts = await fetchPosts(childSlug.value);
      store.childPosts = childPosts.map((post: Post) => ({ ...post }));
    }
  });*/

  const store = useStore<{ posts: Post[], childSlug: {value:string}}>({
    posts: [],
    childSlug: {
      value: '',
    }
  });

  useTask$(async (taskContext) => {
    taskContext.track(() => store.childSlug.value);

    //console.log("child: " + childSlug);

    if (isServer) {
      const posts = await fetchPosts();
      store.posts = posts.map((post: Post) => ({ ...post }));
    }
  });


  /*(const loadChildren = $((async (slug$: string) => {
    childSlug = slug$;
  }));*/

  return (
    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="row-gap-10 grid gap-6 md:grid-cols-2">
        <div class="mb-4 md:mb-0 md:py-4 md:pr-16">
          {head.title && <h2 class="text-4xl md:text-4xl leading-3 sm:whitespace-nowrap text-primary mb-8">{head.title}</h2>}
          
          <Posts childSlug={store.childSlug} posts={store.posts} />

        </div>
      </div>
    </section>
  );  
});
