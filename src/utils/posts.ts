import fs from "fs";
import path from 'path';
import matter from "gray-matter";

import type { Post } from "~/types";

const BLOG_DIR = "src/content/post";

export function* readAllFiles(dir: string): Generator<string> {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory()) {
      yield* readAllFiles(path.join(dir, file.name));
    } else {
      yield path.join(dir, file.name);
    }
  }
}

const load = async (): Promise<Post[]> => {
  const blogPath = BLOG_DIR;
  //const files = fs.readdirSync(blogPath);
  const posts: Post[] = [];
  for (const file of readAllFiles(blogPath)) {
    //console.log(file);
    //const filename = path.basename(file);
    const filename = file.replace(blogPath + "/", "");
    const slug = filename.replace(".md", "");
    //console.log("slug: " + slug);
    const post = await findPostBySlug(slug);
    //console.log(JSON.stringify(post));
    if(post) {
      posts.push(post);
      //console.log(file);
    }
  }

  /*const posts = Promise.all(
    files
      .next
      .filter((filename) => filename.endsWith(".md"))
      .map(async (filename) => {
        const slug = filename.replace(".md", "");
        return await findPostBySlug(slug);
      })
    // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  );*/

  return posts;
};

let _posts: Post[];

// Ensure only the minimal needed data is exposed
// fields.forEach((field) => {
//   if (field === 'slug') {
//     items[field] = realSlug
//   }
//   if (field === 'content') {
//     items[field] = content
//   }

//   if (typeof data[field] !== 'undefined') {
//     items[field] = data[field]
//   }
// })

/** */
export const fetchPosts = async (): Promise<Post[]> => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  _posts = _posts || load();

  return await _posts;
};

/** */
export const findLatestPosts = async ({ count, page }: { count?: number; page?: number } = {}): Promise<Post[]> => {
  const _count = count || 4;
  const _page = page || 1;
  const posts = await fetchPosts();

  return Array.isArray(posts) ? posts.slice((_page - 1) * _count, (_page - 1) * _count + _count) : [];
};

/** */
export const findPostBySlug = async (slug: string): Promise<Post | null> => {
  //console.log("slug: " + slug);
  if (!slug) return null;

  try {
    //console.log("xxxx: " + BLOG_DIR + `/${slug}.md`);
    //const readFile = fs.readFileSync(BLOG_DIR + sub + `/${slug}.md`, "utf-8");
    const readFile = fs.readFileSync(BLOG_DIR + `/${slug}.md`, "utf-8");
    const { data, content } = matter(readFile);

    const {
      publishDate: rawPublishDate = new Date(),
      updateDate: rawUpdateDate,
      title,
      excerpt,
      image,
      tags = [],
      category,
      author,
      draft = false,
      metadata = {},
    } = data;

    const publishDate = new Date(rawPublishDate);
    const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : undefined;

    console.log(slug);

    return {
      id: slug,
      slug: slug,

      publishDate: publishDate,
      updateDate: updateDate,

      title: title,
      excerpt: excerpt,
      image: image,

      category: category,
      tags: tags,
      author: author,

      draft: draft,

      metadata,

      content
    };
  } catch (e) {
    /* empty */
  }

  return null;
};

/** */
export const findPostsByIds = async (ids: string[]) => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts();

  return ids.reduce(function (r: Post[], id: string) {
    posts.some(function (post: Post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};
