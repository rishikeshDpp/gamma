import ImageGallery from "@/components/ImageGallery";
import ImageSlideshow from "@/components/ImageSlideshow";
import AdminButton from "@/components/AdminButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Full-screen slideshow header */}
      <ImageSlideshow />
      
             {/* Gallery section */}
             <section id="gallery" className="py-16 bg-white dark:bg-black transition-colors">
               <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                   <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                     Creative Portfolio
                   </h2>
                   <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
                     Discover a collection of stunning visual work that captures moments, 
                     emotions, and creative expression.
                   </p>
                 </div>
          
          <ImageGallery />
          
          <AdminButton />
        </div>
      </section>
    </main>
  );
}