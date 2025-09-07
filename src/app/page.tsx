import ImageGallery from "@/components/ImageGallery";
import ImageSlideshow from "@/components/ImageSlideshow";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Full-screen slideshow header */}
      <ImageSlideshow />
      
             {/* Gallery section */}
             <section id="gallery" className="py-16 bg-black">
               <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                   <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                     Creative Portfolio
                   </h2>
                   <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                     Discover a collection of stunning visual work that captures moments, 
                     emotions, and creative expression.
                   </p>
                 </div>
          
          <ImageGallery />
        </div>
      </section>
    </main>
  );
}