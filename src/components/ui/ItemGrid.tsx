import { twMerge } from "tailwind-merge";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  items?: Array<Item>;
  defaultIcon?: any;
  classes?: Record<string, string>;
}

export const ItemGrid = (props: Props) => {
  const { items = [], defaultIcon: DefaultIcon = null, classes = {} } = props;

  const {
    container: containerClass = "md:grid-cols-2 hover:text-white",
    panel: panelClass = "hover:bg-primary hover:text-white text-gray-600 dark:text-slate-400 p-6 items-stretch  h-full rounded-lg shadow-md hover:shadow-2xl",
    title: titleClass = "",
    //description: descriptionClass = "",
    icon: defaultIconClass = "text-gray-600 dark:text-secondary-700",
  } = classes as Record<string, string>;

  return (
    items.length && (
      <div class={twMerge("grid mx-auto gap-8", containerClass)}>
        {items.map(({ title, description, icon: Icon, classes: itemClasses = {} }, index) => (
          <div key={`${title}${index}`}>
            <div class={twMerge("flex flex-row max-w-md ", panelClass, itemClasses.panel)}>
              <div class="flex justify-center">
                {(Icon || DefaultIcon) &&
                  (Icon ? (
                    <Icon class={twMerge("w-7 h-7 mr-2", defaultIconClass)} />
                  ) : (
                    <DefaultIcon class={twMerge("w-7 h-7 mr-2", defaultIconClass, itemClasses.icon)} />
                  ))}
              </div>
              <div>
                <h3 class={twMerge("text-xl font-bold", titleClass, itemClasses.title)}>{title}</h3>
                {description && (
                  <p
                    class={twMerge(" mt-3", titleClass, itemClasses.title)}
                    dangerouslySetInnerHTML={description}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};
