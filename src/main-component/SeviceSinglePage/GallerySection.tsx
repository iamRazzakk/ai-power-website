import { Link } from "react-router-dom";
import { getServiceDetailsLink } from "../../data/servicesData";

interface GallerySectionProps {
  images: [string, string, string];
  serviceSlug: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ images, serviceSlug }) => {
  return (
    <div className="service-gallary ul_li_between mt-125">
      {images.map((img, index) => (
        <div className="single-item-image img-hove-effect" key={index}>
          <div className="xb-img">
            {[...Array(4)].map((_, i) => (
              <Link key={i} to={getServiceDetailsLink(serviceSlug)}>
                <img src={img} alt={`${serviceSlug} gallery ${index + 1}`} loading="lazy" />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GallerySection;
