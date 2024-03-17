import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Learn My&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Din&nbsp;</h1>
        </div>

        <div className="mt-8"></div>
      </section>
    </DefaultLayout>
  );
}
