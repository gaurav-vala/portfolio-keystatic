import Blogs from "./Blogs";

export default function BlogsSection() {
    return (
        <section className="mt-6">
            <h2 className="font-serif text-xl italic font-black text-red-500">
                my blogs
            </h2>
            <Blogs count={10} />
        </section>
    );
}
