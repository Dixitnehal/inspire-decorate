
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ id, image, name, price, category, isNew = false }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: `${name} has been ${isFavorite ? "removed from" : "added to"} your favorites.`,
    });
  };

  return (
    <Link to={`/product/${id}`}>
      <div 
        className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-[3/4]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          
          {isNew && (
            <span className="absolute top-2 left-2 bg-decor-accent text-white text-xs px-2 py-1 rounded-md">
              New
            </span>
          )}
          
          <Button
            size="icon"
            variant="ghost"
            className={`absolute top-2 right-2 bg-white/80 hover:bg-white text-decor-primary hover:text-decor-accent rounded-full h-9 w-9 ${
              isFavorite ? "text-decor-accent" : ""
            }`}
            onClick={handleToggleFavorite}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
          </Button>
          
          <div 
            className={`absolute bottom-0 left-0 right-0 bg-white/95 p-3 flex justify-center transform transition-transform duration-300 ${
              isHovered ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <Button 
              className="bg-decor-accent hover:bg-decor-accent/90 text-white w-full"
              size="sm"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="text-xs text-decor-secondary mb-1">{category}</div>
          <h3 className="font-medium text-decor-primary truncate">{name}</h3>
          <p className="text-decor-accent font-semibold mt-1">${price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
