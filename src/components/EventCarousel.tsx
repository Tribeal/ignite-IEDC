import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import eve3 from '../assets/images/eve3.jpg'
import eve2 from '../assets/images/eve2.jpg'
import eve4 from '../assets/images/IMG_7481 (1).jpg'
import eve1 from '../assets/images/IMG_7370.jpg'
import eve5 from '../assets/images/IMG_7454.jpg'


const EventCarousel = () => {
  const eventImages = [
    {
      id: 1,
      src: eve3,
      alt: "IEDC Innovation Workshop",
      title: "IEDC Inuaguration",
    },
    {
      id: 2,
      src: eve2,
      alt: "IEDC Startup Pitch Event",
      title: "IEDC Inuaguration",
    },
    {
      id: 3,
      src: eve4,
      alt: "IEDC Tech Conference",
      title: "Talk Session",
    },
    {
      id: 4,
      src: eve1,
      alt: "IEDC Hackathon",
      title: "48-Hour Hackathon",
    },
    {
      id: 5,
      src: eve5,
      alt: "IEDC Networking Event",
      title: "Entrepreneur Networking",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {eventImages.map((image) => (
            <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="relative group overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default EventCarousel;
